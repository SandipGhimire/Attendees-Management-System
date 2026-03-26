import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AttendeesService } from "./attendees.service";
import { parseQuery } from "../prisma/prisma.utils";
import { AttendeeCreateDto } from "./attendees.dto";

@Controller("attendees")
export class AttendeesController {
  constructor(private readonly attendeesService: AttendeesService) {}

  @Get("list")
  async listSponsors(@Query() query: Record<string, any>) {
    const result = await this.attendeesService.getAllAttendees(parseQuery(query));
    return {
      success: true,
      message: "Sponsors fetched successfully",
      status: 200,
      data: result,
    };
  }

  @Post("create")
  async createAttendee(@Body() body: AttendeeCreateDto) {
    const result = await this.attendeesService.createAttendee(body);
    return {
      success: true,
      message: "Attendee created successfully",
      status: 200,
      data: result,
    };
  }
}
