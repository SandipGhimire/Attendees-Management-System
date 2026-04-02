import { CreateTaskPayload } from "shared-types";
export declare class TaskCreateDto implements CreateTaskPayload {
    name: string;
    slug: string;
    description?: string;
    isActive: boolean;
    order?: number;
}
export declare class TaskUpdateDto extends TaskCreateDto {
    id?: number;
}
