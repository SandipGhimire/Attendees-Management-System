import { PrismaService } from "../prisma/prisma.service";
import { DashboardStats } from "shared-types";
export declare class DashboardService {
    private readonly db;
    constructor(db: PrismaService);
    getDashboardStats(): Promise<DashboardStats>;
}
