import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { SystemService } from "./system.service";
import { ActionType, LogLevel, LogType } from "../../database/generated/client";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { PermissionGuard } from "../role/guards/permission.guard";
import { Permission } from "../role/decorators/permission.decorator";

@Controller("system")
@UseGuards(JwtAuthGuard, PermissionGuard)
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Get("logs")
  @Permission(["system_logs.read"])
  async findAll(
    @Query("page") page?: number,
    @Query("limit") limit?: number,
    @Query("userId") userId?: string,
    @Query("type") type?: LogType,
    @Query("action") action?: ActionType,
    @Query("level") level?: LogLevel,
    @Query("search") search?: string
  ) {
    return this.systemService.findAll({
      page: Number(page) || 1,
      limit: Number(limit) || 10,
      userId,
      type,
      action,
      level,
      search,
    });
  }
}
