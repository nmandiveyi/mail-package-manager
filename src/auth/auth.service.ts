import { Injectable as Service } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UserSigninDto, UserSignupDto } from "./auth.type";

@Service()
export class AuthService {
    constructor( private prismaService: PrismaService){}

    async signup(signupDto: UserSignupDto) {
        return signupDto;
    }

    async signin(signinDto: UserSigninDto) {
        return signinDto;
    }
}