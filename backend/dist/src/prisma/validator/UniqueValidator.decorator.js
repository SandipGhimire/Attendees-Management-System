"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUnique = IsUnique;
const class_validator_1 = require("class-validator");
const UniqueValidator_validator_1 = require("./UniqueValidator.validator");
function IsUnique(model, column, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "isUnique",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [model, column, validationOptions?.excludeIdField],
            options: validationOptions,
            validator: UniqueValidator_validator_1.IsUniqueConstraint,
        });
    };
}
//# sourceMappingURL=UniqueValidator.decorator.js.map