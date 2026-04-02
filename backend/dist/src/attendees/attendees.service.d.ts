import { PrismaService } from "../prisma/prisma.service";
import { CreateAttendeePayload, FetchParams, PaginatedData } from "shared-types";
export declare class AttendeesService {
    private readonly db;
    constructor(db: PrismaService);
    getAllAttendees(params: FetchParams): Promise<PaginatedData<any>>;
    getAttendeeById(id: number): Promise<{
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
    } | null>;
    getAllIdCards(): Promise<{
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
    }>;
    private generateMissingCards;
    private getProfilePicBuffer;
    private generateAndSaveIdCard;
    createAttendee(body: CreateAttendeePayload, profilePic?: Express.Multer.File, paymentSlip?: Express.Multer.File): Promise<{
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
    }>;
    updateAttendee(body: CreateAttendeePayload & {
        id?: number;
    }, profilePic?: Express.Multer.File, paymentSlip?: Express.Multer.File): Promise<{
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
    } | null>;
    getAttendeeByQrCode(qrCode: string): Promise<({
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
    }) | null>;
    toggleTask(attendeeId: number, taskId: number, updatedBy: string): Promise<({
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
    }) | null>;
}
