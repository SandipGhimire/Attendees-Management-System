import { Controller, Get, Query, Req } from "@nestjs/common";
import type { Request } from "express";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("self")
  async getProfile(@Req() req: Request) {
    return await this.userService.getSelfUser(req.user?.userUUID || "");
  }

  @Get("list")
  async listUsers(@Query() query: Record<string, any>) {
    let parsedFilters: unknown;
    if (typeof query.filters === "string") {
      parsedFilters = JSON.parse(query.filters);
    } else {
      parsedFilters = query.filters;
    }
    const params = {
      page: Number(query.page) || 1,
      pageSize: Number(query.pageSize) || 10,
      search: query.search as string | undefined,
      sortBy: query.sortBy as string | undefined,
      sortOrder: query.sortOrder as "asc" | "desc" | undefined,
      filters:
        typeof parsedFilters === "object" && parsedFilters !== null ? (parsedFilters as Record<string, unknown>) : {},
    };
    const result = await this.userService.getAllUsers(params);
    return {
      success: true,
      message: "Users fetched successfully",
      status: 200,
      data: result,
    };
  }
}
