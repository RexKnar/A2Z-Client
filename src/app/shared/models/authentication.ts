export class UserLogin {
    userName: string;
    password: string;
    userId: number;
    otp: number;
    newPassword: number;

}
export class UserLoginResponse{
    accessToken: string;
    roles: number;
    userId: number;
    userName: string;
    isAuthorize: boolean;
    firstName: string;
}

