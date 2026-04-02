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
exports.AttendeesController = void 0;
const common_1 = require("@nestjs/common");
const attendees_service_1 = require("./attendees.service");
const prisma_utils_1 = require("../prisma/prisma.utils");
const attendees_dto_1 = require("./attendees.dto");
const platform_express_1 = require("@nestjs/platform-express");
const permission_decorator_1 = require("../role/decorators/permission.decorator");
let AttendeesController = class AttendeesController {
    attendeesService;
    constructor(attendeesService) {
        this.attendeesService = attendeesService;
    }
    async getAllIdCards() {
        const result = await this.attendeesService.getAllIdCards();
        return {
            success: true,
            message: "ID cards fetched successfully",
            status: 200,
            data: result,
        };
    }
    async listAttendees(query) {
        const result = await this.attendeesService.getAllAttendees((0, prisma_utils_1.parseQuery)(query));
        return {
            success: true,
            message: "Attendees fetched successfully",
            status: 200,
            data: result,
        };
    }
    async getAttendeeByQrCode(qrCode) {
        const result = await this.attendeesService.getAttendeeByQrCode(qrCode);
        if (!result) {
            return {
                success: false,
                message: "Attendee not found for this QR code",
                status: 200,
                data: null,
            };
        }
        return {
            success: true,
            message: "Attendee fetched successfully",
            status: 200,
            data: result,
        };
    }
    async toggleTaskByQrCode(qrCode, taskId, req) {
        const attendee = await this.attendeesService.getAttendeeByQrCode(qrCode);
        if (!attendee) {
            return {
                success: false,
                message: "Attendee not found for this QR code",
                status: 200,
                data: null,
            };
        }
        const result = await this.attendeesService.toggleTask(attendee.id, parseInt(taskId, 10), req.user.username);
        return {
            success: true,
            message: "Task toggled successfully",
            status: 200,
            data: result,
        };
    }
    async toggleTaskById(id, taskId, req) {
        const result = await this.attendeesService.toggleTask(parseInt(id, 10), parseInt(taskId, 10), req.user.username);
        if (!result) {
            return {
                success: false,
                message: "Failed to toggle task. Attendee or Task might not exist.",
                status: 200,
                data: null,
            };
        }
        return {
            success: true,
            message: "Task toggled successfully",
            status: 200,
            data: result,
        };
    }
    async getAttendeeById(id) {
        const numericId = parseInt(id, 10);
        const result = await this.attendeesService.getAttendeeById(numericId);
        if (!result) {
            return {
                success: false,
                message: "Attendee not found",
                status: 200,
                data: null,
            };
        }
        return {
            success: true,
            message: "Attendee fetched successfully",
            status: 200,
            data: result,
        };
    }
    async createAttendee(body, files) {
        const profilePicture = files.profilePicture?.[0];
        const paymentSlip = files.paymentSlip?.[0];
        const result = await this.attendeesService.createAttendee(body, profilePicture, paymentSlip);
        return {
            success: true,
            message: "Attendee created successfully",
            status: 200,
            data: result,
        };
    }
    async updateAttendee(body, files) {
        const profilePicture = files.profilePicture?.[0];
        const paymentSlip = files.paymentSlip?.[0];
        const result = await this.attendeesService.updateAttendee(body, profilePicture, paymentSlip);
        if (!result) {
            return {
                success: false,
                message: "Attendee not found for update",
                status: 200,
                data: null,
            };
        }
        return {
            success: true,
            message: "Attendee updated successfully",
            status: 200,
            data: result,
        };
    }
};
exports.AttendeesController = AttendeesController;
__decorate([
    (0, common_1.Get)("all-id-cards"),
    (0, permission_decorator_1.Permission)(["attendee.all_id_cards"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttendeesController.prototype, "getAllIdCards", null);
__decorate([
    (0, common_1.Get)("list"),
    (0, permission_decorator_1.Permission)(["attendee.list"]),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AttendeesController.prototype, "listAttendees", null);
__decorate([
    (0, common_1.Get)("qr/:qrCode"),
    (0, permission_decorator_1.Permission)(["attendee.scan"]),
    __param(0, (0, common_1.Param)("qrCode")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttendeesController.prototype, "getAttendeeByQrCode", null);
__decorate([
    (0, common_1.Post)("qr/:qrCode/task/:taskId/toggle"),
    (0, permission_decorator_1.Permission)(["attendee.qr_task_toggle"]),
    __param(0, (0, common_1.Param)("qrCode")),
    __param(1, (0, common_1.Param)("taskId")),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AttendeesController.prototype, "toggleTaskByQrCode", null);
__decorate([
    (0, common_1.Post)(":id/task/:taskId/toggle"),
    (0, permission_decorator_1.Permission)(["attendee.task_toggle"]),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("taskId")),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AttendeesController.prototype, "toggleTaskById", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, permission_decorator_1.Permission)(["attendee.view"]),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AttendeesController.prototype, "getAttendeeById", null);
__decorate([
    (0, common_1.Post)("create"),
    (0, permission_decorator_1.Permission)(["attendee.create"]),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: "profilePicture", maxCount: 1 },
        { name: "paymentSlip", maxCount: 1 },
    ])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [attendees_dto_1.AttendeeCreateDto, Object]),
    __metadata("design:returntype", Promise)
], AttendeesController.prototype, "createAttendee", null);
__decorate([
    (0, common_1.Post)("update/:id"),
    (0, permission_decorator_1.Permission)(["attendee.update"]),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: "profilePicture", maxCount: 1 },
        { name: "paymentSlip", maxCount: 1 },
    ])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [attendees_dto_1.AttendeeCreateDto, Object]),
    __metadata("design:returntype", Promise)
], AttendeesController.prototype, "updateAttendee", null);
exports.AttendeesController = AttendeesController = __decorate([
    (0, common_1.Controller)("attendees"),
    __metadata("design:paramtypes", [attendees_service_1.AttendeesService])
], AttendeesController);
//# sourceMappingURL=attendees.controller.js.map