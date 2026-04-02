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
var IsUniqueConstraint_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUniqueConstraint = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const prisma_service_1 = require("../prisma.service");
let IsUniqueConstraint = IsUniqueConstraint_1 = class IsUniqueConstraint {
    prisma;
    logger = new common_1.Logger(IsUniqueConstraint_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async validate(value, args) {
        const constraints = args.constraints;
        const [modelName, fieldName, excludeIdField] = constraints;
        try {
            const model = this.prisma[modelName];
            if (!model) {
                this.logger.error(`Model ${modelName} not found in PrismaService`);
                return false;
            }
            const where = { [fieldName]: value };
            if (excludeIdField) {
                let excludeValue = args.object[excludeIdField];
                if (excludeValue !== undefined && excludeValue !== null) {
                    if (!isNaN(Number(excludeValue)))
                        excludeValue = Number(excludeValue);
                    where[excludeIdField] = { not: excludeValue };
                }
            }
            const record = await model.findFirst({
                where,
            });
            return !record;
        }
        catch (error) {
            this.logger.error(`Error validating uniqueness for ${fieldName} in ${modelName}: ${error}`);
            return false;
        }
    }
    defaultMessage(args) {
        const constraints = args.constraints;
        const [modelName, fieldName] = constraints;
        return args.message || `${fieldName} must be unique in ${modelName}`;
    }
};
exports.IsUniqueConstraint = IsUniqueConstraint;
exports.IsUniqueConstraint = IsUniqueConstraint = IsUniqueConstraint_1 = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], IsUniqueConstraint);
//# sourceMappingURL=UniqueValidator.validator.js.map