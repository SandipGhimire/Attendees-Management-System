import { ValidatorOptions } from "class-validator";
interface customIsUniqueValidationArguments extends ValidatorOptions {
    message?: string;
    excludeIdField?: string;
}
export declare function IsUnique(model: string, column: string, validationOptions?: customIsUniqueValidationArguments): (object: object, propertyName: string) => void;
export {};
