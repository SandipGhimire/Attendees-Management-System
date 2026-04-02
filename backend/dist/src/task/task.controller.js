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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const prisma_utils_1 = require("../prisma/prisma.utils");
const task_dto_1 = require("./task.dto");
const permission_decorator_1 = require("../role/decorators/permission.decorator");
let TaskController = class TaskController {
    taskService;
    constructor(taskService) {
        this.taskService = taskService;
    }
    async taskList(query) {
        const result = await this.taskService.getAllTasks((0, prisma_utils_1.parseQuery)(query));
        return {
            success: true,
            message: "Tasks fetched successfully",
            status: 200,
            data: result,
        };
    }
    async getTaskById(id) {
        const result = await this.taskService.getTaskById(Number(id));
        if (!result) {
            return {
                success: false,
                message: "Task not found",
                status: 200,
                data: null,
            };
        }
        return {
            success: true,
            message: "Task fetched successfully",
            status: 200,
            data: result,
        };
    }
    async createTask(body) {
        const result = await this.taskService.createTask(body);
        return {
            success: true,
            message: "Task created successfully",
            status: 200,
            data: result,
        };
    }
    async updateTask(id, body) {
        const result = await this.taskService.updateTask(Number(id), body);
        if (!result) {
            return {
                success: false,
                message: "Task not found for update",
                status: 200,
                data: null,
            };
        }
        return {
            success: true,
            message: "Task updated successfully",
            status: 200,
            data: result,
        };
    }
    async deleteTask(id) {
        const result = await this.taskService.deleteTask(Number(id));
        if (!result) {
            return {
                success: false,
                message: "Task not found for deletion",
                status: 200,
                data: null,
            };
        }
        return {
            success: true,
            message: "Task deleted successfully",
            status: 200,
            data: result,
        };
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Get)("list"),
    (0, permission_decorator_1.Permission)(["task.list"]),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "taskList", null);
__decorate([
    (0, common_1.Get)("detail/:id"),
    (0, permission_decorator_1.Permission)(["task.view"]),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskById", null);
__decorate([
    (0, common_1.Post)("create"),
    (0, permission_decorator_1.Permission)(["task.create"]),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_dto_1.TaskCreateDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.Post)("update/:id"),
    (0, permission_decorator_1.Permission)(["task.update"]),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, task_dto_1.TaskUpdateDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)("delete/:id"),
    (0, permission_decorator_1.Permission)(["task.delete"]),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)("task"),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map