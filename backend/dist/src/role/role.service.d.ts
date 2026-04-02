import { PrismaService } from "../prisma/prisma.service";
import { FetchParams, PaginatedData } from "shared-types";
import { CreateRoleDto, UpdateRoleDto } from "./role.dto";
export declare class RoleService {
    private readonly db;
    constructor(db: PrismaService);
    createRole(data: CreateRoleDto, userId: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        createdBy: string;
        updatedBy: string | null;
    }>;
    updateRole(id: number, data: UpdateRoleDto, userId: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        createdBy: string;
        updatedBy: string | null;
    } | null>;
    deleteRole(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        createdBy: string;
        updatedBy: string | null;
    }>;
    getRoleById(id: number): Promise<({
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
    }) | null>;
    getAllRoles(params: FetchParams): Promise<PaginatedData<any>>;
    getAllPermissions(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        key: string;
    }[]>;
}
