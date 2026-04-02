import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ActionType, LogLevel, LogType, Prisma } from "../../database/generated/client";

export interface CreateLogDto {
  type: LogType;
  action?: ActionType;
  userId?: string;
  level?: LogLevel;
  message: string;
  metadata?: Prisma.InputJsonValue;
}

@Injectable()
export class SystemService {
  constructor(private prisma: PrismaService) {}

  async createLog(dto: CreateLogDto) {
    return this.prisma.systemLog.create({
      data: {
        type: dto.type,
        action: dto.action,
        userId: dto.userId,
        level: dto.level || LogLevel.INFO,
        message: dto.message,
        metadata: dto.metadata || {},
      },
    });
  }

  async findAll(query: {
    page?: number;
    limit?: number;
    userId?: string;
    type?: LogType;
    action?: ActionType;
    level?: LogLevel;
    search?: string;
  }) {
    const { page = 1, limit = 10, userId, type, action, level, search } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.SystemLogWhereInput = {};

    if (userId) where.userId = userId;
    if (type) where.type = type;
    if (action) where.action = action;
    if (level) where.level = level;
    if (search) {
      where.OR = [
        { message: { contains: search, mode: "insensitive" } },
        { userId: { contains: search, mode: "insensitive" } },
      ];
    }

    const [items, total] = await Promise.all([
      this.prisma.systemLog.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      this.prisma.systemLog.count({ where }),
    ]);

    // Fetch user details for each log if userId exists
    const logsWithUsers = await Promise.all(
      items.map(async (log) => {
        let user: {
          uuid: string;
          email: string;
          username: string;
          firstName: string;
          lastName: string;
        } | null = null;
        const logData = log as { userId?: string };
        if (logData.userId) {
          user = await this.prisma.user.findUnique({
            where: { uuid: logData.userId },
            select: {
              uuid: true,
              email: true,
              username: true,
              firstName: true,
              lastName: true,
            },
          });
        }
        return {
          ...(log as Record<string, unknown>),
          user,
        };
      })
    );

    return {
      items: logsWithUsers,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
