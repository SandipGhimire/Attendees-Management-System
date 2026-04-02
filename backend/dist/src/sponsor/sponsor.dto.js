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
exports.SponsorUpdateDto = exports.SponsorCreateDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const UniqueValidator_decorator_1 = require("../prisma/validator/UniqueValidator.decorator");
class SponsorCreateDto {
    name;
    email;
    phoneNumber;
    logo;
    description;
    contribution;
    isActive;
    order;
    links;
}
exports.SponsorCreateDto = SponsorCreateDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Name is required" }),
    (0, UniqueValidator_decorator_1.IsUnique)("sponsor", "name", { message: "Name already exists", excludeIdField: "id" }),
    __metadata("design:type", String)
], SponsorCreateDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is required" }),
    (0, UniqueValidator_decorator_1.IsUnique)("sponsor", "email", { message: "Email already exists", excludeIdField: "id" }),
    __metadata("design:type", String)
], SponsorCreateDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Phone number is required" }),
    (0, UniqueValidator_decorator_1.IsUnique)("sponsor", "phoneNumber", { message: "Phone number already exists", excludeIdField: "id" }),
    __metadata("design:type", String)
], SponsorCreateDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SponsorCreateDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SponsorCreateDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SponsorCreateDto.prototype, "contribution", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value === "true" || value === true),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SponsorCreateDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : undefined)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SponsorCreateDto.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => typeof value === "string"
        ? JSON.parse(value)
        : value),
    __metadata("design:type", Array)
], SponsorCreateDto.prototype, "links", void 0);
class SponsorUpdateDto extends SponsorCreateDto {
    id;
}
exports.SponsorUpdateDto = SponsorUpdateDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : undefined)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SponsorUpdateDto.prototype, "id", void 0);
//# sourceMappingURL=sponsor.dto.js.map