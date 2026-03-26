import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from "class-validator";
import { CreateAttendeePayload } from "shared-types";

export class AttendeeCreateDto implements CreateAttendeePayload {
  @IsString()
  @IsNotEmpty({ message: "Name is required" })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: "Email is required" })
  email: string;

  @IsString()
  @IsNotEmpty({ message: "Phone number is required" })
  @Matches(/^9[78]\d{8}$/, { message: "Phone number must be a valid 10-digit number starting with 97 or 98" })
  phoneNumber: string;

  @IsString()
  @IsNotEmpty({ message: "Club name is required" })
  clubName: string;

  @IsOptional()
  @IsNumber()
  membershipID?: number;

  @IsBoolean()
  isVeg: boolean;

  @IsString()
  @IsNotEmpty({ message: "Position is required" })
  position: string;
}
