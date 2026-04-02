import { PrismaService } from "../prisma/prisma.service";
import { FetchParams, PaginatedData } from "shared-types";
import { TaskCreateDto, TaskUpdateDto } from "./task.dto";
export declare class TaskService {
    private readonly db;
    constructor(db: PrismaService);
    getAllTasks(params: FetchParams): Promise<PaginatedData<any>>;
    getTaskById(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        description: string | null;
        isActive: boolean;
        order: number | null;
        slug: string;
    } | null>;
    createTask(data: TaskCreateDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        description: string | null;
        isActive: boolean;
        order: number | null;
        slug: string;
    }>;
    updateTask(id: number, data: TaskUpdateDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        description: string | null;
        isActive: boolean;
        order: number | null;
        slug: string;
    } | null>;
    deleteTask(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        description: string | null;
        isActive: boolean;
        order: number | null;
        slug: string;
    } | null>;
}
