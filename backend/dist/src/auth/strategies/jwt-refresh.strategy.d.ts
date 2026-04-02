import { Strategy, StrategyOptionsWithRequest } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { JwtPayload } from "./jwt.strategy";
import type { Request } from "express";
import { CookieService } from "../helpers/cookie.helper";
declare const JwtRefreshStrategy_base: new (...args: [opt: StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private cookieService;
    constructor(config: ConfigService, cookieService: CookieService);
    validate(req: Request, payload: JwtPayload): {
        refreshToken: string;
        sub: string;
        email: string;
        sessionId: string;
    };
}
export {};
