import { CreateAttendeePayload } from "shared-types";
export declare class AttendeeCreateDto implements CreateAttendeePayload {
    name: string;
    id?: number;
    email: string;
    phoneNumber: string;
    clubName: string;
    membershipID?: number;
    isVeg: boolean;
    position: string;
    paymentSlip?: any;
}
