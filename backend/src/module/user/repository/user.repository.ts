import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { DbService } from 'src/config/db/db.service';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
    
    all(): User[] {
        return DbService.getUsers();
    }
    
    get(id: Number): User {
        return DbService.users.find(user => user.id === id);
    }
    
    add(user: User): void {
        DbService.users.push(user)
    }
    
    update(id: Number, user: User): void {
        //Find index of specific object using findIndex method.    
        let userIndex = DbService.users.findIndex(user=> user.id == id);
        
        DbService.users[userIndex].name = user.name ? user.name : DbService.users[userIndex].name;
        DbService.users[userIndex].email = user.email ? user.email : DbService.users[userIndex].email;
        DbService.users[userIndex].active = ('active' in user) ? user.active : DbService.users[userIndex].active;
        DbService.users[userIndex].updatedAt = moment().format('yyyy-MM-DD HH:mm');
    }
    
    changeStatus(id: Number, active: boolean): void {
        //Find index of specific object using findIndex method.    
        let userIndex = DbService.users.findIndex(user=> user.id == id);

        DbService.users[userIndex].active = active;
        DbService.users[userIndex].updatedAt = moment().format('yyyy-MM-DD HH:mm');
    }
    
    remove(id: Number): void {
        //Find index of specific object using findIndex method.
        const user = DbService.users.find(user => user.id === id);
        let userIndex = DbService.users.findIndex(user=> user.id == id);
        DbService.users.splice(userIndex ,1);
    }
}
