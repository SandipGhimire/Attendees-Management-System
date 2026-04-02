import { ConfigService } from "@nestjs/config";
import { Response } from "express";
export declare class CookieService {
    private configService;
    constructor(configService: ConfigService);
    isDev(): boolean;
    setAuthCookies(res: Response, accessToken: string, refreshToken: string): void;
    clearAuthCookies(res: Response): void;
}
