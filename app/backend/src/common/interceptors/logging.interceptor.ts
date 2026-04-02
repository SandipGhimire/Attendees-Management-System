import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { SystemService } from "../../system/system.service";
import { ActionType, LogType, LogLevel, Prisma } from "../../../database/generated/client";
import { Request, Response } from "express";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private systemService: SystemService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const http = context.switchToHttp();
    const request = http.getRequest<Request & { user?: { uuid: string } }>();
    const { method, url, body, user } = request as unknown as {
      method: string;
      url: string;
      body: unknown;
      user?: { uuid: string };
    };

    // Skip GET requests and health checks

    if (method === "GET" || url.includes("health")) {
      return next.handle();
    }

    return next.handle().pipe(
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      tap(async () => {
        const action = this.mapMethodToAction(method);
        if (!action) return;

        // Don't log login payloads via interceptor (handled manually in AuthService)

        if (url.includes("auth/login") || url.includes("auth/signin")) {
          return;
        }

        const sanitizedBody = this.sanitize(body);
        const statusCode = http.getResponse<Response>().statusCode;

        await this.systemService.createLog({
          type: LogType.USER,
          action,
          userId: user?.uuid,
          level: LogLevel.INFO,
          message: `${method} ${url}`,
          metadata: {
            url,
            method,
            payload: sanitizedBody as Prisma.InputJsonValue,
            statusCode,
          },
        });
      })
    );
  }

  private mapMethodToAction(method: string): ActionType | null {
    switch (method) {
      case "POST":
        return ActionType.CREATE;
      case "PUT":
      case "PATCH":
        return ActionType.UPDATE;
      case "DELETE":
        return ActionType.DELETE;
      default:
        return null;
    }
  }

  private sanitize(obj: unknown): unknown {
    if (!obj || typeof obj !== "object") return obj;

    const sensitiveFields = ["password", "confirmPassword", "oldPassword", "newPassword", "token", "refreshToken"];

    if (Array.isArray(obj)) {
      return obj.map((item) => this.sanitize(item));
    }

    const sanitized = { ...(obj as Record<string, unknown>) };

    for (const key in sanitized) {
      const value = sanitized[key];
      if (sensitiveFields.includes(key)) {
        sanitized[key] = "[SCRUBBED]";
      } else if (typeof value === "string") {
        // Detect long strings that look like binary or base64 (e.g., images)
        if (value.length > 500 && !value.includes(" ")) {
          sanitized[key] = "[DATA REMOVED]";
        }
      } else if (typeof value === "object") {
        sanitized[key] = this.sanitize(value);
      }
    }
    return sanitized;
  }
}
