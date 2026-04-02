type IdCardData = {
    name: string;
    position: string;
    club: string;
    qrCodeText: string;
    profilePicBuffer?: Buffer | null;
};
export declare function generateIdCard(data: IdCardData): Promise<Buffer>;
export {};
