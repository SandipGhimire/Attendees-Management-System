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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const bcrypt = __importStar(require("bcrypt"));
const ua_parser_js_1 = require("ua-parser-js");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    prisma;
    jwtService;
    config;
    constructor(prisma, jwtService, config) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.config = config;
    }
    async signUp(dto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (existingUser) {
            throw new common_1.ConflictException("Email already exists");
        }
        if (dto.phoneNumber) {
            const phoneExists = await this.prisma.user.findUnique({
                where: { phoneNumber: dto.phoneNumber },
            });
            if (phoneExists) {
                throw new common_1.ConflictException("Phone number already exists");
            }
        }
        const hash = await bcrypt.hash(dto.password, 10);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                password: hash,
                username: dto.username,
                firstName: dto.firstName,
                middleName: dto.middleName,
                lastName: dto.lastName,
                phoneNumber: dto.phoneNumber,
                lastLogin: new Date(),
            },
        });
        return {
            user: {
                uuid: user.uuid,
                email: user.email,
                username: user.username,
                firstName: user.firstName,
                middleName: user.middleName,
                lastName: user.lastName,
            },
        };
    }
    async signIn(dto, deviceInfo) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        if (!user.isActive) {
            throw new common_1.UnauthorizedException("Account is inactive");
        }
        const passwordMatches = await bcrypt.compare(dto.password, user.password);
        if (!passwordMatches) {
            throw new common_1.UnauthorizedException("Invalid credentials");
        }
        await this.prisma.user.update({
            where: { uuid: user.uuid },
            data: { lastLogin: new Date() },
        });
        await this.cleanupInactiveSessions(user.uuid);
        const tokens = await this.createSession(user.uuid, user.email, deviceInfo);
        return {
            ...tokens,
            user: {
                uuid: user.uuid,
                email: user.email,
                username: user.username,
                firstName: user.firstName,
                middleName: user.middleName,
                lastName: user.lastName,
            },
        };
    }
    async createSession(userUUID, email, deviceInfo) {
        const parser = new ua_parser_js_1.UAParser(deviceInfo.userAgent);
        const browser = parser.getBrowser();
        const os = parser.getOS();
        const deviceName = `${browser.name || "Unknown"} on ${os.name || "Unknown"}`;
        const sessionInactivityDays = this.config.get("SESSION_INACTIVITY_DAYS") || 30;
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + sessionInactivityDays);
        const refreshTokenEntry = await this.prisma.refreshToken.create({
            data: {
                token: "",
                userUUID,
                expiresAt,
                deviceId: deviceInfo.deviceId,
                deviceName,
                ipAddress: deviceInfo.ipAddress,
                userAgent: deviceInfo.userAgent,
                lastUsedAt: new Date(),
            },
        });
        const sessionId = refreshTokenEntry.id;
        const tokens = await this.getTokens(userUUID, email, sessionId);
        const hashedToken = await bcrypt.hash(tokens.refreshToken, 10);
        await this.prisma.refreshToken.update({
            where: { id: sessionId },
            data: { token: hashedToken },
        });
        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            sessionId,
        };
    }
    async logout(userUUID, sessionId) {
        const result = await this.prisma.refreshToken.deleteMany({
            where: {
                id: sessionId,
                userUUID,
            },
        });
        if (result.count === 0) {
            throw new common_1.UnauthorizedException("Please login to continue!");
        }
        return { message: "Logged out successfully" };
    }
    async logoutAll(userUUID) {
        await this.prisma.refreshToken.deleteMany({
            where: { userUUID },
        });
        return { message: "Logged out from all devices" };
    }
    async logoutOtherSessions(userUUID, currentSessionId) {
        await this.prisma.refreshToken.deleteMany({
            where: {
                userUUID,
                id: { not: currentSessionId },
            },
        });
        return { message: "Logged out from other devices" };
    }
    async refreshTokens(userUUID, sessionId, refreshToken) {
        const storedToken = await this.prisma.refreshToken.findUnique({
            where: { id: sessionId },
            include: { user: true },
        });
        if (!storedToken || storedToken.userUUID !== userUUID) {
            throw new common_1.UnauthorizedException("Access Denied - Session not found");
        }
        if (new Date() > storedToken.expiresAt) {
            await this.prisma.refreshToken.delete({ where: { id: sessionId } });
            throw new common_1.UnauthorizedException("Access Denied - Token expired");
        }
        const tokenMatches = await bcrypt.compare(refreshToken, storedToken.token);
        if (!tokenMatches) {
            throw new common_1.UnauthorizedException("Access Denied - Invalid token");
        }
        const tokens = await this.getTokens(userUUID, storedToken.user.email, sessionId);
        const hashedToken = await bcrypt.hash(tokens.refreshToken, 10);
        await this.prisma.refreshToken.update({
            where: { id: sessionId },
            data: {
                token: hashedToken,
                lastUsedAt: new Date(),
            },
        });
        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            sessionId,
        };
    }
    async getActiveSessions(userUUID) {
        await this.cleanupInactiveSessions(userUUID);
        const sessions = await this.prisma.refreshToken.findMany({
            where: { userUUID },
            orderBy: { lastUsedAt: "desc" },
        });
        return sessions.map((session) => ({
            sessionId: session.id,
            deviceName: session.deviceName,
            deviceId: session.deviceId,
            ipAddress: session.ipAddress,
            createdAt: session.createdAt,
            lastUsedAt: session.lastUsedAt,
            expiresAt: session.expiresAt,
        }));
    }
    async revokeSession(userUUID, sessionId) {
        const result = await this.prisma.refreshToken.deleteMany({
            where: {
                id: sessionId,
                userUUID,
            },
        });
        if (result.count === 0) {
            throw new common_1.UnauthorizedException("Please login to continue!");
        }
        return { message: "Session revoked successfully" };
    }
    async getTokens(userUUID, email, sessionId) {
        const payload = {
            sub: userUUID,
            email: email,
            sessionId: sessionId,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: this.config.get("JWT_SECRET"),
                expiresIn: this.config.get("JWT_SECRET_EXPIRE_TIME"),
            }),
            this.jwtService.signAsync(payload, {
                secret: this.config.get("JWT_REFRESH_SECRET"),
                expiresIn: `${this.config.get("SESSION_INACTIVITY_DAYS") || 30}d`,
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
    async cleanupExpiredTokens(userUUID) {
        await this.prisma.refreshToken.deleteMany({
            where: {
                userUUID,
                expiresAt: { lt: new Date() },
            },
        });
    }
    async cleanupInactiveSessions(userUUID) {
        const inactivityThreshold = this.config.get("SESSION_INACTIVITY_DAYS") || 30;
        const inactivityDate = new Date();
        inactivityDate.setDate(inactivityDate.getDate() - inactivityThreshold);
        await this.prisma.refreshToken.deleteMany({
            where: {
                userUUID,
                lastUsedAt: { lt: inactivityDate },
            },
        });
        await this.cleanupExpiredTokens(userUUID);
    }
    async cleanupAllInactiveSessions() {
        const inactivityThreshold = this.config.get("SESSION_INACTIVITY_DAYS") || 30;
        const inactivityDate = new Date();
        inactivityDate.setDate(inactivityDate.getDate() - inactivityThreshold);
        const inactiveResult = await this.prisma.refreshToken.deleteMany({
            where: {
                lastUsedAt: { lt: inactivityDate },
            },
        });
        const expiredResult = await this.prisma.refreshToken.deleteMany({
            where: {
                expiresAt: { lt: new Date() },
            },
        });
        return {
            inactiveSessions: inactiveResult.count,
            expiredSessions: expiredResult.count,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map