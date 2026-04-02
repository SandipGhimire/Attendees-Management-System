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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DashboardService = class DashboardService {
    db;
    constructor(db) {
        this.db = db;
    }
    async getDashboardStats() {
        const totalAttendees = await this.db.attendee.count();
        const totalTasks = await this.db.task.count({ where: { isActive: true } });
        const totalSponsors = await this.db.sponsor.count();
        const vegCount = await this.db.attendee.count({ where: { isVeg: true } });
        const nonVegCount = totalAttendees - vegCount;
        const clubWiseData = await this.db.attendee.groupBy({
            by: ["clubName"],
            _count: {
                id: true,
            },
        });
        const clubWise = clubWiseData.map((item) => ({
            name: item.clubName,
            count: item._count.id,
        }));
        const tasksData = await this.db.task.findMany({
            where: { isActive: true },
            include: {
                _count: {
                    select: { logs: true },
                },
            },
            orderBy: { order: "asc" },
        });
        const tasks = tasksData.map((task) => ({
            id: task.id,
            name: task.name,
            completed: task._count.logs,
            total: totalAttendees,
        }));
        return {
            overview: {
                totalAttendees,
                totalTasks,
                totalSponsors,
            },
            attendees: {
                vegCount,
                nonVegCount,
                clubWise,
            },
            tasks,
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map