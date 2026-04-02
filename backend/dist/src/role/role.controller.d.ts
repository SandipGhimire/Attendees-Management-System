import { RoleService } from "./role.service";
import { CreateRoleDto, UpdateRoleDto } from "./role.dto";
import { type AuthenticatedRequest } from "../auth/interfaces/auth-request.interface";
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    createRole(data: CreateRoleDto, req: AuthenticatedRequest): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            createdBy: string;
            updatedBy: string | null;
        };
    }>;
    updateRole(id: number, data: UpdateRoleDto, req: AuthenticatedRequest): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: null;
    } | {
        success: boolean;
        message: string;
        status: number;
        data: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            createdBy: string;
            updatedBy: string | null;
        };
    }>;
    deleteRole(id: number): Promise<{
        success: boolean;
        message: string;
        status: number;
    }>;
    roleList(query: Record<string, any>): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: import("shared-types").PaginatedData<any>;
    }>;
    getRoleById(id: number): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: null;
    } | {
        success: boolean;
        message: string;
        status: number;
        data: {
            permissions: ({
                permission: {
                    id: number;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    description: string | null;
                    key: string;
                };
            } & {
                roleId: number;
                permissionId: number;
            })[];
        } & {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            createdBy: string;
            updatedBy: string | null;
        };
    }>;
    permissionList(): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            key: string;
        }[];
    }>;
}
