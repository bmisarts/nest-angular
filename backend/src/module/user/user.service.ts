import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { UserEditDto } from './dto/user.edit.dto';
import { UserRetrieveDto } from './dto/user.retrieve.dto';
import { UserStoreDto } from './dto/user.store.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repository/user.repository'; 

@Injectable()
export class UserService {

  constructor(private userRepository: UserRepository) {}
  
  create(userDto: UserStoreDto) {
    let user = plainToClass(User, userDto, { excludeExtraneousValues: true });
    return this.userRepository.add(user);
  }

  findAll(): UserRetrieveDto[] {
    let users = this.userRepository.all()
      .map(user => plainToClass(UserRetrieveDto, user), { excludeExtraneousValues: true });
      
    return users;
  }

  findOne(id: number): UserRetrieveDto {
    return plainToClass(UserRetrieveDto, this.userRepository.get(id), { excludeExtraneousValues: true });
  }

  update(id: number, userDto: UserEditDto) {
    let user = plainToClass(User, userDto, { excludeExtraneousValues: true });
    
    return this.userRepository.update(id, user);
  }
  
  changeStatus(id: number, changeStatus: boolean) {    
    return this.userRepository.changeStatus(id, changeStatus);
  }

  remove(id: number) {
    return this.userRepository.remove(id);
  }
}
