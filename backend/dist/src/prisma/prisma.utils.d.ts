import { PaginatedData, FetchParams } from "shared-types";
export declare function paginate<Model extends {
    findMany: (args: any) => Promise<any[]>;
    count: (args: any) => Promise<number>;
}, Args extends Parameters<Model["findMany"]>[0], Result extends Awaited<ReturnType<Model["findMany"]>>[number]>(model: Model, params: FetchParams, extraWhere?: Args["where"], options?: Omit<Args, "where" | "skip" | "take" | "orderBy">): Promise<PaginatedData<Result>>;
export declare function parseQuery(query: Record<string, any>): {
    page: number;
    pageSize: number;
    search: string | undefined;
    sortBy: string | undefined;
    sortOrder: "asc" | "desc" | undefined;
    filters: Record<string, unknown>;
};
