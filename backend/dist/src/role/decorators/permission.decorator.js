"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = exports.PERMISSIONS_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.PERMISSIONS_KEY = "permissions";
const Permission = (permissions, requireAll = true) => {
    const flatPermissions = permissions.flat();
    return (0, common_1.SetMetadata)(exports.PERMISSIONS_KEY, { permissions: flatPermissions, requireAll });
};
exports.Permission = Permission;
//# sourceMappingURL=permission.decorator.js.map