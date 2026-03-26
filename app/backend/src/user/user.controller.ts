import { Controller, Get, Query, Req, Param } from "@nestjs/common";
import type { Request } from "express";
import { UserService } from "./user.service";
import { parseQuery } from "../prisma/prisma.utils";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("self")
  async getProfile(@Req() req: Request) {
    return await this.userService.getSelfUser(req.user?.userUUID || "");
  }

  @Get("list")
  async listUsers(@Query() query: Record<string, any>) {
    const result = await this.userService.getAllUsers(parseQuery(query));
    return {
      success: true,
      message: "Users fetched successfully",
      status: 200,
      data: result,
    };
  }

  @Get(":id")
  async getUserById(@Param("id") id: string) {
    const numericId = parseInt(id, 10);
    const result = await this.userService.getUserById(numericId);
    return {
      success: true,
      message: "User fetched successfully",
      status: 200,
      data: result,
    };
  }
}
