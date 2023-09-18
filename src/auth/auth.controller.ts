import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserSigninDto, UserSignupDto } from "./auth.type";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService){}

    @Post("signup")
    async signup(@Body() signupDto: UserSignupDto) {
        return await this.authService.signup(signupDto)
    }

    @Post("signin")
    async signin(@Body() signinDto: UserSigninDto) {
        return await this.authService.signin(signinDto)
    }
}