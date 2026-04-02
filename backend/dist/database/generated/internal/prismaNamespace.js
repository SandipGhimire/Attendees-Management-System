"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.RefreshTokenScalarFieldEnum = exports.UserScalarFieldEnum = exports.SystemLogScalarFieldEnum = exports.SponsorLinkScalarFieldEnum = exports.SponsorScalarFieldEnum = exports.RolePermissionScalarFieldEnum = exports.UserRoleScalarFieldEnum = exports.PermissionScalarFieldEnum = exports.RoleScalarFieldEnum = exports.AttendeeTaskLogScalarFieldEnum = exports.TaskScalarFieldEnum = exports.AttendeeScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.6.0",
    engine: "75cbdc1eb7150937890ad5465d861175c6624711"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Attendee: 'Attendee',
    Task: 'Task',
    AttendeeTaskLog: 'AttendeeTaskLog',
    Role: 'Role',
    Permission: 'Permission',
    UserRole: 'UserRole',
    RolePermission: 'RolePermission',
    Sponsor: 'Sponsor',
    SponsorLink: 'SponsorLink',
    SystemLog: 'SystemLog',
    User: 'User',
    RefreshToken: 'RefreshToken'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.AttendeeScalarFieldEnum = {
    id: 'id',
    email: 'email',
    name: 'name',
    phoneNumber: 'phoneNumber',
    profilePic: 'profilePic',
    paymentSlip: 'paymentSlip',
    idCard: 'idCard',
    clubName: 'clubName',
    position: 'position',
    membershipID: 'membershipID',
    isVeg: 'isVeg',
    qrCode: 'qrCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.TaskScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    order: 'order',
    slug: 'slug',
    createdAt: 'createdAt'
};
exports.AttendeeTaskLogScalarFieldEnum = {
    id: 'id',
    attendeeId: 'attendeeId',
    taskId: 'taskId',
    scannedBy: 'scannedBy',
    createdAt: 'createdAt'
};
exports.RoleScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PermissionScalarFieldEnum = {
    id: 'id',
    name: 'name',
    key: 'key',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserRoleScalarFieldEnum = {
    userUUID: 'userUUID',
    roleId: 'roleId'
};
exports.RolePermissionScalarFieldEnum = {
    roleId: 'roleId',
    permissionId: 'permissionId'
};
exports.SponsorScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    logo: 'logo',
    description: 'description',
    contribution: 'contribution',
    isActive: 'isActive',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SponsorLinkScalarFieldEnum = {
    id: 'id',
    sponsorId: 'sponsorId',
    label: 'label',
    url: 'url',
    createdAt: 'createdAt'
};
exports.SystemLogScalarFieldEnum = {
    id: 'id',
    type: 'type',
    action: 'action',
    userId: 'userId',
    level: 'level',
    message: 'message',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    uuid: 'uuid',
    email: 'email',
    password: 'password',
    username: 'username',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RefreshTokenScalarFieldEnum = {
    id: 'id',
    token: 'token',
    userUUID: 'userUUID',
    expiresAt: 'expiresAt',
    deviceId: 'deviceId',
    deviceName: 'deviceName',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    lastUsedAt: 'lastUsedAt',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map