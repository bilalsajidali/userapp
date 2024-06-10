import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class UsersService {
    constructor (@InjectModel(User.name) private usersModel:Model<User>){}


    getUser(){
        return this.usersModel.find();
    }

    getUserbyid(id:string){
        return this.usersModel.findById(id);
    }
}
