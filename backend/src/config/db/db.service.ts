import { Injectable } from '@nestjs/common';
import { User } from 'src/module/user/entities/user.entity';

@Injectable()
export class DbService {
    static users: User[] = [];
    
    static getUsers() {
        return this.users;
    }
}
