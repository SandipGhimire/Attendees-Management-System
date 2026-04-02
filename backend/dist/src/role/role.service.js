"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_utils_1 = require("../prisma/prisma.utils");
let RoleService = class RoleService {
    db;
    constructor(db) {
        this.db = db;
    }
    async createRole(data, userId) {
        const { permissionKeys, ...rest } = data;
        const user = await this.db.user.findUnique({ where: { id: userId }, select: { username: true } });
        return await this.db.role.create({
            data: {
                ...rest,
                createdBy: user?.username || "system",
                permissions: permissionKeys
                    ? {
                        create: (await Promise.all(permissionKeys.map(async (key) => {
                            const perm = await this.db.permission.findUnique({ where: { key } });
                            return perm ? { permissionId: perm.id } : null;
                        }))).filter((p) => p !== null),
                    }
                    : undefined,
            },
        });
    }
    async updateRole(id, data, userId) {
        const existingRole = await this.db.role.findUnique({ where: { id } });
        if (!existingRole)
            return null;
        const { permissionKeys, ...rest } = data;
        const user = await this.db.user.findUnique({ where: { id: userId }, select: { username: true } });
        const updateData = {
            ...rest,
            updatedBy: user?.username || "system",
        };
        if (permissionKeys) {
            await this.db.rolePermission.deleteMany({ where: { roleId: id } });
            updateData.permissions = {
                create: (await Promise.all(permissionKeys.map(async (key) => {
                    const perm = await this.db.permission.findUnique({ where: { key } });
                    return perm ? { permissionId: perm.id } : null;
                }))).filter((p) => p !== null),
            };
        }
        return await this.db.role.update({
            where: { id },
            data: updateData,
        });
    }
    async deleteRole(id) {
        return await this.db.role.delete({
            where: { id },
        });
    }
    async getRoleById(id) {
        return await this.db.role.findUnique({
            where: { id },
            include: {
                permissions: {
                    include: {
                        permission: true,
                    },
                },
            },
        });
    }
    async getAllRoles(params) {
        const filters = params.filters || {};
        const prismaFilters = {};
        if (filters.name) {
            prismaFilters.name = { contains: String(filters.name), mode: "insensitive" };
        }
        return await (0, prisma_utils_1.paginate)(this.db.role, params, prismaFilters, {
            include: {
                permissions: {
                    include: {
                        permission: {
                            select: {
                                key: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async getAllPermissions() {
        return await this.db.permission.findMany({
            orderBy: { key: "asc" },
        });
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoleService);
//# sourceMappingURL=role.service.js.map