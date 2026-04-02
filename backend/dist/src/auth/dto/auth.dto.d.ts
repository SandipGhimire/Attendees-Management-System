export declare class LoginDTO {
    email: string;
    password: string;
    deviceId?: string;
}
export declare class SignUpDto {
    email: string;
    password: string;
    username: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    phoneNumber?: string;
    deviceId?: string;
}
export declare class RefreshTokenDto {
    refreshToken: string;
    deviceId?: string;
}
export declare class UserRequestDto {
    userId: number;
    userUUID: string;
    email: string;
    username: string;
    sessionId: string;
    permissions: string[];
}
export declare class RefreshTokenRequestDto {
    sub: string;
    email: string;
    sessionId: string;
    iat: string;
    exp: string;
    refreshToken: string;
}
