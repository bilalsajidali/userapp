import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';


@Controller('users')
export class UsersController {
    constructor (private userService:UsersService){}



    @Get() 
    getUser(){
        return this.userService.getUser()
    }

    @Get(":id") 
    getUserbyid(@Param("id") id:string){
        return this.userService.getUserbyid(id)
    }



}
