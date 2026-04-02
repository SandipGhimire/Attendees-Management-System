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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_utils_1 = require("../prisma/prisma.utils");
let TaskService = class TaskService {
    db;
    constructor(db) {
        this.db = db;
    }
    async getAllTasks(params) {
        const filters = params.filters || {};
        const prismaFilters = {};
        if (filters.name) {
            prismaFilters.name = { contains: String(filters.name), mode: "insensitive" };
        }
        if (filters.slug) {
            prismaFilters.slug = { contains: String(filters.slug), mode: "insensitive" };
        }
        return await (0, prisma_utils_1.paginate)(this.db.task, { ...params, filters: prismaFilters });
    }
    async getTaskById(id) {
        const task = await this.db.task.findUnique({
            where: { id },
        });
        return task;
    }
    async createTask(data) {
        return await this.db.task.create({
            data: {
                name: data.name,
                slug: data.slug,
                description: data.description,
                isActive: data.isActive,
                order: data.order,
            },
        });
    }
    async updateTask(id, data) {
        const task = await this.getTaskById(id);
        if (!task)
            return null;
        return await this.db.task.update({
            where: { id },
            data: {
                name: data.name,
                slug: data.slug,
                description: data.description,
                isActive: data.isActive,
                order: data.order,
            },
        });
    }
    async deleteTask(id) {
        const task = await this.getTaskById(id);
        if (!task)
            return null;
        return await this.db.task.delete({
            where: { id },
        });
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskService);
//# sourceMappingURL=task.service.js.map