import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";



export class SignupDTO{


    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password:string;

    @IsNotEmpty()
    @IsEmail({},{message:'Please enter correct email'})
    email:string;
}