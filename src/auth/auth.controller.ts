import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDTO } from './dtos/signup.dto';
import { Body,Post } from '@nestjs/common';
import { LoginDTO } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}




    @Post('signup')
    signup(@Body() signupDTO:SignupDTO): Promise <{token:string}>{
        return this.authService.signup(signupDTO)
    }



    @Post('login')
    login(@Body() loginDTO:LoginDTO): Promise <{token:string}>{
        return this.authService.login(loginDTO)
    }














}
