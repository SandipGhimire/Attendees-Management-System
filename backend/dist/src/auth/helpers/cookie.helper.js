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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ms_1 = __importDefault(require("ms"));
let CookieService = class CookieService {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    isDev() {
        return this.configService.get("ENVIRONMENT") === "development";
    }
    setAuthCookies(res, accessToken, refreshToken) {
        const accessTokenExp = this.configService.get("JWT_SECRET_EXPIRE_TIME") || "15m";
        const sessionInactivityDays = this.configService.get("SESSION_INACTIVITY_DAYS") || 30;
        const accessTokenMaxAge = (0, ms_1.default)(accessTokenExp);
        const refreshTokenMaxAge = sessionInactivityDays * 24 * 60 * 60 * 1000;
        res.cookie("access_token", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
            maxAge: accessTokenMaxAge,
        });
        res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/auth/refresh",
            maxAge: refreshTokenMaxAge,
        });
    }
    clearAuthCookies(res) {
        res.clearCookie("access_token", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
        });
        res.clearCookie("refresh_token", {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/auth/refresh",
        });
    }
};
exports.CookieService = CookieService;
exports.CookieService = CookieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CookieService);
//# sourceMappingURL=cookie.helper.js.map