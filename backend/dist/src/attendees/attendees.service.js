"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendeesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_utils_1 = require("../prisma/prisma.utils");
const file_upload_utils_1 = require("../common/utils/file-upload.utils");
const cardGenerator_1 = require("../core/utils/cardGenerator");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
let AttendeesService = class AttendeesService {
    db;
    isGeneratingCards = false;
    constructor(db) {
        this.db = db;
    }
    async getAllAttendees(params) {
        const filters = params.filters || {};
        const prismaFilters = {};
        if (filters.name) {
            prismaFilters.name = { contains: String(filters.name), mode: "insensitive" };
        }
        if (filters.email) {
            prismaFilters.email = { contains: String(filters.email), mode: "insensitive" };
        }
        if (filters.phoneNumber) {
            prismaFilters.phoneNumber = { contains: String(filters.phoneNumber), mode: "insensitive" };
        }
        if (filters.clubName) {
            prismaFilters.clubName = { contains: String(filters.clubName), mode: "insensitive" };
        }
        if (filters.membershipID) {
            prismaFilters.membershipID = { contains: String(filters.membershipID), mode: "insensitive" };
        }
        return await (0, prisma_utils_1.paginate)(this.db.attendee, { ...params, filters: prismaFilters });
    }
    async getAttendeeById(id) {
        const attendee = await this.db.attendee.findUnique({
            where: { id },
        });
        return attendee;
    }
    async getAllIdCards() {
        const attendees = await this.db.attendee.findMany({
            orderBy: { name: "asc" },
        });
        const missingCards = attendees.filter((a) => !a.idCard);
        if (missingCards.length > 0 && !this.isGeneratingCards) {
            this.isGeneratingCards = true;
            void this.generateMissingCards(missingCards);
        }
        return {
            attendees: attendees.filter((a) => !!a.idCard),
            isGenerating: this.isGeneratingCards || missingCards.length > 0,
        };
    }
    async generateMissingCards(attendees) {
        try {
            for (const attendee of attendees) {
                try {
                    const idCardPath = await this.generateAndSaveIdCard(attendee);
                    await this.db.attendee.update({
                        where: { id: attendee.id },
                        data: { idCard: idCardPath },
                    });
                }
                catch (error) {
                    console.error(`⚠️ Failed to generate background ID card for ${attendee.name}:`, error);
                }
            }
        }
        finally {
            this.isGeneratingCards = false;
        }
    }
    getProfilePicBuffer(profilePicPath) {
        if (!profilePicPath)
            return null;
        const fullPath = path.join(process.cwd(), "public", profilePicPath);
        if (!fs.existsSync(fullPath))
            return null;
        return fs.readFileSync(fullPath);
    }
    async generateAndSaveIdCard(attendee) {
        const profilePicBuffer = this.getProfilePicBuffer(attendee.profilePic);
        const cardBuffer = await (0, cardGenerator_1.generateIdCard)({
            name: attendee.name,
            position: attendee.position || "",
            club: attendee.clubName,
            qrCodeText: attendee.qrCode,
            profilePicBuffer,
        });
        const fileName = `${attendee.name.replace(/\s+/g, "-").toLowerCase()}-idcard`;
        return (0, file_upload_utils_1.saveBuffer)(cardBuffer, "attendees", fileName, ".png");
    }
    async createAttendee(body, profilePic, paymentSlip) {
        const generateRandomQRCode = async (length = 100) => {
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = "";
            for (let i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            const existingAttendee = await this.db.attendee.findUnique({
                where: { qrCode: result },
            });
            if (existingAttendee) {
                return generateRandomQRCode(length);
            }
            return result;
        };
        let profilePicPath = null;
        if (profilePic) {
            const fileName = `${body.name.replace(/\s+/g, "-").toLowerCase()}-profile`;
            profilePicPath = (0, file_upload_utils_1.saveFile)(profilePic, "attendees", fileName);
        }
        let paymentSlipPath = null;
        if (paymentSlip) {
            const fileName = `${body.name.replace(/\s+/g, "-").toLowerCase()}-payment`;
            paymentSlipPath = (0, file_upload_utils_1.saveFile)(paymentSlip, "attendees", fileName);
        }
        const qrCode = await generateRandomQRCode();
        const attendee = await this.db.attendee.create({
            data: {
                name: body.name,
                email: body.email,
                phoneNumber: String(body.phoneNumber),
                clubName: body.clubName,
                membershipID: body.membershipID ? String(body.membershipID) : null,
                isVeg: body.isVeg,
                profilePic: profilePicPath,
                paymentSlip: paymentSlipPath,
                position: body.position,
                qrCode,
            },
        });
        try {
            const idCardPath = await this.generateAndSaveIdCard(attendee);
            return await this.db.attendee.update({
                where: { id: attendee.id },
                data: { idCard: idCardPath },
            });
        }
        catch (error) {
            console.error("⚠️ Failed to generate ID card:", error);
            return attendee;
        }
    }
    async updateAttendee(body, profilePic, paymentSlip) {
        if (!body.id)
            throw new Error("Attendee ID is required for update");
        const existingAttendee = await this.db.attendee.findUnique({
            where: { id: Number(body.id) },
        });
        if (!existingAttendee) {
            return null;
        }
        let profilePicPath = existingAttendee.profilePic;
        if (profilePic) {
            const fileName = `${body.name.replace(/\s+/g, "-").toLowerCase()}-profile`;
            profilePicPath = (0, file_upload_utils_1.saveFile)(profilePic, "attendees", fileName, existingAttendee.profilePic);
        }
        else if (existingAttendee.name !== body.name && existingAttendee.profilePic) {
            const newPicName = `${body.name.replace(/\s+/g, "-").toLowerCase()}-profile`;
            const renamedPath = (0, file_upload_utils_1.renameFile)(existingAttendee.profilePic, newPicName);
            if (renamedPath)
                profilePicPath = renamedPath;
        }
        let paymentSlipPath = existingAttendee.paymentSlip;
        if (paymentSlip) {
            const fileName = `${body.name.replace(/\s+/g, "-").toLowerCase()}-payment`;
            paymentSlipPath = (0, file_upload_utils_1.saveFile)(paymentSlip, "attendees", fileName, existingAttendee.paymentSlip);
        }
        else if (existingAttendee.name !== body.name && existingAttendee.paymentSlip) {
            const newSlipName = `${body.name.replace(/\s+/g, "-").toLowerCase()}-payment`;
            const renamedPath = (0, file_upload_utils_1.renameFile)(existingAttendee.paymentSlip, newSlipName);
            if (renamedPath)
                paymentSlipPath = renamedPath;
        }
        const updatedAttendee = await this.db.attendee.update({
            where: { id: Number(body.id) },
            data: {
                name: body.name,
                email: body.email,
                phoneNumber: String(body.phoneNumber),
                clubName: body.clubName,
                membershipID: body.membershipID ? String(body.membershipID) : null,
                isVeg: body.isVeg,
                position: body.position,
                profilePic: profilePicPath,
                paymentSlip: paymentSlipPath,
            },
        });
        try {
            if (existingAttendee.name !== body.name && existingAttendee.idCard) {
                (0, file_upload_utils_1.deleteFile)(existingAttendee.idCard);
            }
            const idCardPath = await this.generateAndSaveIdCard(updatedAttendee);
            return await this.db.attendee.update({
                where: { id: updatedAttendee.id },
                data: { idCard: idCardPath },
            });
        }
        catch (error) {
            console.error("⚠️ Failed to regenerate ID card:", error);
            return updatedAttendee;
        }
    }
    async getAttendeeByQrCode(qrCode) {
        const attendee = await this.db.attendee.findUnique({
            where: { qrCode },
            include: { logs: true },
        });
        if (!attendee)
            return null;
        return attendee;
    }
    async toggleTask(attendeeId, taskId, updatedBy) {
        const attendee = await this.db.attendee.findUnique({ where: { id: attendeeId } });
        if (!attendee)
            return null;
        const log = await this.db.attendeeTaskLog.findUnique({
            where: {
                attendeeId_taskId: {
                    attendeeId,
                    taskId,
                },
            },
        });
        if (log) {
            await this.db.attendeeTaskLog.delete({
                where: { id: log.id },
            });
        }
        else {
            await this.db.attendeeTaskLog.create({
                data: {
                    attendeeId,
                    taskId,
                    scannedBy: updatedBy,
                },
            });
        }
        return this.db.attendee.findUnique({
            where: { id: attendeeId },
            include: { logs: true },
        });
    }
};
exports.AttendeesService = AttendeesService;
exports.AttendeesService = AttendeesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AttendeesService);
//# sourceMappingURL=attendees.service.js.map