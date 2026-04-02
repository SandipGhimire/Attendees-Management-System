type GenerateQRParams = {
    text: string;
    size?: number;
};
export declare function generateQRCode({ text, size }: GenerateQRParams): Promise<Buffer>;
export {};
