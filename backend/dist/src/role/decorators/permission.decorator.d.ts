export declare const PERMISSIONS_KEY = "permissions";
export interface PermissionMetadata {
    permissions: string[];
    requireAll: boolean;
}
export declare const Permission: (permissions: (string | string[])[], requireAll?: boolean) => import("@nestjs/common").CustomDecorator<string>;
