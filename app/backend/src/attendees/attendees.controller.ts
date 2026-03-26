import { Body, Controller, Get, Param, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AttendeesService } from "./attendees.service";
import { parseQuery } from "../prisma/prisma.utils";
import { AttendeeCreateDto } from "./attendees.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("attendees")
export class AttendeesController {
  constructor(private readonly attendeesService: AttendeesService) {}

  @Get("list")
  async listAttendees(@Query() query: Record<string, any>) {
    const result = await this.attendeesService.getAllAttendees(parseQuery(query));
    return {
      success: true,
      message: "Attendees fetched successfully",
      status: 200,
      data: result,
    };
  }

  @Get(":id")
  async getAttendeeById(@Param("id") id: string) {
    const numericId = parseInt(id, 10);
    const result = await this.attendeesService.getAttendeeById(numericId);
    return {
      success: true,
      message: "Attendee fetched successfully",
      status: 200,
      data: result,
    };
  }

  @Post("create")
  @UseInterceptors(FileInterceptor("profilePicture"))
  async createAttendee(@Body() body: AttendeeCreateDto, @UploadedFile() file?: Express.Multer.File) {
    const result = await this.attendeesService.createAttendee(body, file);
    return {
      success: true,
      message: "Attendee created successfully",
      status: 200,
      data: result,
    };
  }

  @Post("update/:id")
  @UseInterceptors(FileInterceptor("profilePicture"))
  async updateAttendee(@Body() body: AttendeeCreateDto, @UploadedFile() file?: Express.Multer.File) {
    const result = await this.attendeesService.updateAttendee(body, file);
    return {
      success: true,
      message: "Attendee updated successfully",
      status: 200,
      data: result,
    };
  }
}
