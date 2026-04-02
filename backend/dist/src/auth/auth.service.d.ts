import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service";
import { SignUpDto, LoginDTO } from "./dto/auth.dto";
interface DeviceInfo {
    userAgent?: string;
    ipAddress?: string;
    deviceId?: string;
}
export declare class AuthService {
    private prisma;
    private jwtService;
    private config;
    constructor(prisma: PrismaService, jwtService: JwtService, config: ConfigService);
    signUp(dto: SignUpDto): Promise<{
        user: {
            uuid: string;
            email: string;
            username: string;
            firstName: string;
            middleName: string | null;
            lastName: string;
        };
    }>;
    signIn(dto: LoginDTO, deviceInfo: DeviceInfo): Promise<{
        user: {
            uuid: string;
            email: string;
            username: string;
            firstName: string;
            middleName: string | null;
            lastName: string;
        };
        accessToken: string;
        refreshToken: string;
        sessionId: string;
    }>;
    createSession(userUUID: string, email: string, deviceInfo: DeviceInfo): Promise<{
        accessToken: string;
        refreshToken: string;
        sessionId: string;
    }>;
    logout(userUUID: string, sessionId: string): Promise<{
        message: string;
    }>;
    logoutAll(userUUID: string): Promise<{
        message: string;
    }>;
    logoutOtherSessions(userUUID: string, currentSessionId: string): Promise<{
        message: string;
    }>;
    refreshTokens(userUUID: string, sessionId: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        sessionId: string;
    }>;
    getActiveSessions(userUUID: string): Promise<{
        sessionId: string;
        deviceName: string | null;
        deviceId: string | null;
        ipAddress: string | null;
        createdAt: Date;
        lastUsedAt: Date;
        expiresAt: Date;
    }[]>;
    revokeSession(userUUID: string, sessionId: string): Promise<{
        message: string;
    }>;
    private getTokens;
    private cleanupExpiredTokens;
    private cleanupInactiveSessions;
    cleanupAllInactiveSessions(): Promise<{
        inactiveSessions: number;
        expiredSessions: number;
    }>;
}
export {};
