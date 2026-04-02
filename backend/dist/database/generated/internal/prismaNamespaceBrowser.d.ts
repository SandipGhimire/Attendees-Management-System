import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly Attendee: "Attendee";
    readonly Task: "Task";
    readonly AttendeeTaskLog: "AttendeeTaskLog";
    readonly Role: "Role";
    readonly Permission: "Permission";
    readonly UserRole: "UserRole";
    readonly RolePermission: "RolePermission";
    readonly Sponsor: "Sponsor";
    readonly SponsorLink: "SponsorLink";
    readonly SystemLog: "SystemLog";
    readonly User: "User";
    readonly RefreshToken: "RefreshToken";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AttendeeScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly phoneNumber: "phoneNumber";
    readonly profilePic: "profilePic";
    readonly paymentSlip: "paymentSlip";
    readonly idCard: "idCard";
    readonly clubName: "clubName";
    readonly position: "position";
    readonly membershipID: "membershipID";
    readonly isVeg: "isVeg";
    readonly qrCode: "qrCode";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AttendeeScalarFieldEnum = (typeof AttendeeScalarFieldEnum)[keyof typeof AttendeeScalarFieldEnum];
export declare const TaskScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly order: "order";
    readonly slug: "slug";
    readonly createdAt: "createdAt";
};
export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];
export declare const AttendeeTaskLogScalarFieldEnum: {
    readonly id: "id";
    readonly attendeeId: "attendeeId";
    readonly taskId: "taskId";
    readonly scannedBy: "scannedBy";
    readonly createdAt: "createdAt";
};
export type AttendeeTaskLogScalarFieldEnum = (typeof AttendeeTaskLogScalarFieldEnum)[keyof typeof AttendeeTaskLogScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdBy: "createdBy";
    readonly updatedBy: "updatedBy";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly key: "key";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const UserRoleScalarFieldEnum: {
    readonly userUUID: "userUUID";
    readonly roleId: "roleId";
};
export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum];
export declare const RolePermissionScalarFieldEnum: {
    readonly roleId: "roleId";
    readonly permissionId: "permissionId";
};
export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];
export declare const SponsorScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phoneNumber: "phoneNumber";
    readonly logo: "logo";
    readonly description: "description";
    readonly contribution: "contribution";
    readonly isActive: "isActive";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SponsorScalarFieldEnum = (typeof SponsorScalarFieldEnum)[keyof typeof SponsorScalarFieldEnum];
export declare const SponsorLinkScalarFieldEnum: {
    readonly id: "id";
    readonly sponsorId: "sponsorId";
    readonly label: "label";
    readonly url: "url";
    readonly createdAt: "createdAt";
};
export type SponsorLinkScalarFieldEnum = (typeof SponsorLinkScalarFieldEnum)[keyof typeof SponsorLinkScalarFieldEnum];
export declare const SystemLogScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly action: "action";
    readonly userId: "userId";
    readonly level: "level";
    readonly message: "message";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type SystemLogScalarFieldEnum = (typeof SystemLogScalarFieldEnum)[keyof typeof SystemLogScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly uuid: "uuid";
    readonly email: "email";
    readonly password: "password";
    readonly username: "username";
    readonly firstName: "firstName";
    readonly middleName: "middleName";
    readonly lastName: "lastName";
    readonly phoneNumber: "phoneNumber";
    readonly isActive: "isActive";
    readonly lastLogin: "lastLogin";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly token: "token";
    readonly userUUID: "userUUID";
    readonly expiresAt: "expiresAt";
    readonly deviceId: "deviceId";
    readonly deviceName: "deviceName";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly lastUsedAt: "lastUsedAt";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
    readonly AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
