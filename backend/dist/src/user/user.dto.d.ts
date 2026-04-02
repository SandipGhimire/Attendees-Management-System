export declare class CreateUserDto {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    username: string;
    phoneNumber?: string;
    password: string;
    roleIds?: string[];
}
export declare class UpdateUserDto {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    email?: string;
    username?: string;
    phoneNumber?: string;
    password?: string;
    roleIds?: string[];
}
