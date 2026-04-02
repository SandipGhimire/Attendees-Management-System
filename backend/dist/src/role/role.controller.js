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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const role_service_1 = require("./role.service");
const prisma_utils_1 = require("../prisma/prisma.utils");
const permission_decorator_1 = require("./decorators/permission.decorator");
const role_dto_1 = require("./role.dto");
let RoleController = class RoleController {
    roleService;
    constructor(roleService) {
        this.roleService = roleService;
    }
    async createRole(data, req) {
        const userId = req.user.userId;
        const result = await this.roleService.createRole(data, userId);
        return {
            success: true,
            message: "Role created successfully",
            status: 201,
            data: result,
        };
    }
    async updateRole(id, data, req) {
        const userId = req.user.userId;
        const result = await this.roleService.updateRole(id, data, userId);
        if (!result) {
            return {
                success: false,
                message: "Role not found for update",
                status: 200,
                data: null,
            };
        }
        return {
            success: true,
            message: "Role updated successfully",
            status: 200,
            data: result,
        };
    }
    async deleteRole(id) {
        const exists = await this.roleService.getRoleById(id);
        if (!exists) {
            return {
                success: false,
                message: "Role not found for deletion",
                status: 200,
            };
        }
        await this.roleService.deleteRole(id);
        return {
            success: true,
            message: "Role deleted successfully",
            status: 200,
        };
    }
    async roleList(query) {
        const result = await this.roleService.getAllRoles((0, prisma_utils_1.parseQuery)(query));
        return {
            success: true,
            message: "Roles fetched successfully",
            status: 200,
            data: result,
        };
    }
    async getRoleById(id) {
        const result = await this.roleService.getRoleById(id);
        if (!result) {
            return {
                success: false,
                message: "Role not found",
                status: 200,
                data: null,
            };
        }
        return {
            success: true,
            message: "Role fetched successfully",
            status: 200,
            data: result,
        };
    }
    async permissionList() {
        const result = await this.roleService.getAllPermissions();
        return {
            success: true,
            message: "Permissions fetched successfully",
            status: 200,
            data: result,
        };
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Post)("create"),
    (0, permission_decorator_1.Permission)(["role.create"]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.CreateRoleDto, Object]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "createRole", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, permission_decorator_1.Permission)(["role.update"]),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, role_dto_1.UpdateRoleDto, Object]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "updateRole", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, permission_decorator_1.Permission)(["role.delete"]),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "deleteRole", null);
__decorate([
    (0, common_1.Get)("list"),
    (0, permission_decorator_1.Permission)(["role.list"]),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "roleList", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, permission_decorator_1.Permission)(["role.view"]),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getRoleById", null);
__decorate([
    (0, common_1.Get)("permissions/list"),
    (0, permission_decorator_1.Permission)(["role.create", "role.update"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "permissionList", null);
exports.RoleController = RoleController = __decorate([
    (0, common_1.Controller)("role"),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map