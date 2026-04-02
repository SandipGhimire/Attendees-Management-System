import { CreateSponsorPayload } from "shared-types";
export declare class SponsorCreateDto implements CreateSponsorPayload {
    name: string;
    email: string;
    phoneNumber: string;
    logo?: string;
    description?: string;
    contribution?: string;
    isActive: boolean;
    order?: number;
    links: {
        label: string;
        url: string;
    }[];
}
export declare class SponsorUpdateDto extends SponsorCreateDto {
    id?: number;
}
