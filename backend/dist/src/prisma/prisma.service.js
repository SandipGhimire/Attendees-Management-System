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
var PrismaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_1 = require("../../database/generated/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
let PrismaService = PrismaService_1 = class PrismaService extends client_1.PrismaClient {
    logger = new common_1.Logger(PrismaService_1.name);
    constructor(config) {
        const adapter = new adapter_pg_1.PrismaPg({
            host: config.get("DATABASE_HOST"),
            port: config.get("DATABASE_PORT"),
            user: config.get("DATABASE_USER"),
            password: config.get("DATABASE_PASSWORD"),
            database: config.get("DATABASE_NAME"),
        });
        super({
            adapter,
        });
        if (process.env.ENVIRONMENT === "development") {
            this.$on("query", (e) => {
                this.logger.debug(`Query: ${e.query}`);
                this.logger.debug(`Duration: ${e.duration}ms`);
            });
        }
    }
    async onModuleInit() {
        await this.$connect();
        this.logger.log("Successfully connected to database");
    }
    async onModuleDestroy() {
        await this.$disconnect();
        this.logger.log("Disconnected from database");
    }
    async cleanDatabase() {
        if (process.env.NODE_ENV === "production") {
            throw new Error("Cannot clean database in production");
        }
        const modelDelegates = Object.values(this).filter((value) => typeof value === "object" &&
            value !== null &&
            "deleteMany" in value &&
            typeof value.deleteMany === "function");
        await Promise.all(modelDelegates.map((model) => model.deleteMany()));
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = PrismaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map