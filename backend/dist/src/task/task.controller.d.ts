import { TaskService } from "./task.service";
import { TaskCreateDto, TaskUpdateDto } from "./task.dto";
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    taskList(query: Record<string, any>): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: import("shared-types").PaginatedData<any>;
    }>;
    getTaskById(id: string): Promise<{
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
            description: string | null;
            isActive: boolean;
            order: number | null;
            slug: string;
        };
    }>;
    createTask(body: TaskCreateDto): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: {
            id: number;
            name: string;
            createdAt: Date;
            description: string | null;
            isActive: boolean;
            order: number | null;
            slug: string;
        };
    }>;
    updateTask(id: string, body: TaskUpdateDto): Promise<{
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
            description: string | null;
            isActive: boolean;
            order: number | null;
            slug: string;
        };
    }>;
    deleteTask(id: string): Promise<{
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
            description: string | null;
            isActive: boolean;
            order: number | null;
            slug: string;
        };
    }>;
}
