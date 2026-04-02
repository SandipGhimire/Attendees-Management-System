import { ValidatorConstraintInterface, ValidationArguments } from "class-validator";
import { PrismaService } from "../prisma.service";
interface customIsUniqueValidationArguments extends ValidationArguments {
    message?: string;
}
export declare class IsUniqueConstraint implements ValidatorConstraintInterface {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    validate(value: any, args: customIsUniqueValidationArguments): Promise<boolean>;
    defaultMessage(args: customIsUniqueValidationArguments): string;
}
export {};
