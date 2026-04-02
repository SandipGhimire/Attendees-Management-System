import { Strategy, StrategyOptionsWithRequest } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../../prisma/prisma.service";
import { CookieService } from "../helpers/cookie.helper";
export interface JwtPayload {
    sub: string;
    email: string;
    sessionId: string;
}
declare const JwtStrategy_base: new (...args: [opt: StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    private cookieService;
    constructor(config: ConfigService, prisma: PrismaService, cookieService: CookieService);
    validate(payload: JwtPayload): Promise<{
        userId: number;
        userUUID: string;
        email: string;
        username: string;
        sessionId: string;
        permissions: string[];
    }>;
}
export {};
