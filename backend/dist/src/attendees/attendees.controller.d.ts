import { AttendeesService } from "./attendees.service";
import { AttendeeCreateDto } from "./attendees.dto";
import type { AuthenticatedRequest } from "../auth/interfaces/auth-request.interface";
export declare class AttendeesController {
    private readonly attendeesService;
    constructor(attendeesService: AttendeesService);
    getAllIdCards(): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: {
            attendees: {
                id: number;
                email: string;
                name: string;
                phoneNumber: string;
                profilePic: string | null;
                paymentSlip: string | null;
                idCard: string | null;
                clubName: string;
                position: string | null;
                membershipID: string | null;
                isVeg: boolean;
                qrCode: string;
                createdAt: Date;
                updatedAt: Date;
            }[];
            isGenerating: boolean;
        };
    }>;
    listAttendees(query: Record<string, any>): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: import("shared-types").PaginatedData<any>;
    }>;
    getAttendeeByQrCode(qrCode: string): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: null;
    } | {
        success: boolean;
        message: string;
        status: number;
        data: {
            logs: {
                id: number;
                createdAt: Date;
                attendeeId: number;
                taskId: number;
                scannedBy: string | null;
            }[];
        } & {
            id: number;
            email: string;
            name: string;
            phoneNumber: string;
            profilePic: string | null;
            paymentSlip: string | null;
            idCard: string | null;
            clubName: string;
            position: string | null;
            membershipID: string | null;
            isVeg: boolean;
            qrCode: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    toggleTaskByQrCode(qrCode: string, taskId: string, req: AuthenticatedRequest): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: ({
            logs: {
                id: number;
                createdAt: Date;
                attendeeId: number;
                taskId: number;
                scannedBy: string | null;
            }[];
        } & {
            id: number;
            email: string;
            name: string;
            phoneNumber: string;
            profilePic: string | null;
            paymentSlip: string | null;
            idCard: string | null;
            clubName: string;
            position: string | null;
            membershipID: string | null;
            isVeg: boolean;
            qrCode: string;
            createdAt: Date;
            updatedAt: Date;
        }) | null;
    }>;
    toggleTaskById(id: string, taskId: string, req: AuthenticatedRequest): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: null;
    } | {
        success: boolean;
        message: string;
        status: number;
        data: {
            logs: {
                id: number;
                createdAt: Date;
                attendeeId: number;
                taskId: number;
                scannedBy: string | null;
            }[];
        } & {
            id: number;
            email: string;
            name: string;
            phoneNumber: string;
            profilePic: string | null;
            paymentSlip: string | null;
            idCard: string | null;
            clubName: string;
            position: string | null;
            membershipID: string | null;
            isVeg: boolean;
            qrCode: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getAttendeeById(id: string): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: null;
    } | {
        success: boolean;
        message: string;
        status: number;
        data: {
            id: number;
            email: string;
            name: string;
            phoneNumber: string;
            profilePic: string | null;
            paymentSlip: string | null;
            idCard: string | null;
            clubName: string;
            position: string | null;
            membershipID: string | null;
            isVeg: boolean;
            qrCode: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    createAttendee(body: AttendeeCreateDto, files: {
        profilePicture?: Express.Multer.File[];
        paymentSlip?: Express.Multer.File[];
    }): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: {
            id: number;
            email: string;
            name: string;
            phoneNumber: string;
            profilePic: string | null;
            paymentSlip: string | null;
            idCard: string | null;
            clubName: string;
            position: string | null;
            membershipID: string | null;
            isVeg: boolean;
            qrCode: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    updateAttendee(body: AttendeeCreateDto, files: {
        profilePicture?: Express.Multer.File[];
        paymentSlip?: Express.Multer.File[];
    }): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: null;
    } | {
        success: boolean;
        message: string;
        status: number;
        data: {
            id: number;
            email: string;
            name: string;
            phoneNumber: string;
            profilePic: string | null;
            paymentSlip: string | null;
            idCard: string | null;
            clubName: string;
            position: string | null;
            membershipID: string | null;
            isVeg: boolean;
            qrCode: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
