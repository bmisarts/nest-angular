import { Injectable, OnModuleInit } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { User } from "../entities/user.entity";
import { UserRepository } from "../repository/user.repository";

@Injectable()
export class UserFakers implements OnModuleInit  {

    constructor(private userRepository: UserRepository) {}
    
    onModuleInit() {
        this.userRepository.add(plainToClass(User, 
            {name:'Serges', email:'serges@yaba-test.com', active:true}
        ));
        this.userRepository.add(plainToClass(User, 
            {name:'Mathias', email:'mathias@yaba-test.com', active:false}
        ));
        this.userRepository.add(plainToClass(User, 
            {name:'Amelia', email:'amelia@yaba-test.com', active:true}
        ));
    }
}