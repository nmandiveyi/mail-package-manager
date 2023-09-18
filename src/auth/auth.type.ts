import { IsAlpha, IsNotEmpty, IsString, IsEmail, } from "class-validator";

export class UserSignupDto  {
    @IsAlpha()
    firstName: string;

    @IsAlpha()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    password: string
}

export class UserSigninDto  {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string
}