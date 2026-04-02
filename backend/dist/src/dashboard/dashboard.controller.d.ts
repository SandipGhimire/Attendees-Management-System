import { DashboardService } from "./dashboard.service";
import { DashboardStats } from "shared-types";
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getStats(): Promise<{
        success: boolean;
        data: DashboardStats;
        message: string;
        status: number;
    }>;
}
