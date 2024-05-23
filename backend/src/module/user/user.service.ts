import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEditDto } from './dto/user.edit.dto';
import { UserStoreDto } from './dto/user.store.dto';
import { IUser } from './schema/user.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private userModel:Model<IUser>) { }
  
  async create(userDto: UserStoreDto): Promise<IUser> {
    const newUser = await new this.userModel(userDto);
    return newUser.save();
  }

  async findAll(): Promise<IUser[]> {
    const userData = await this.userModel.find();
    if (!userData || userData.length == 0) {
        throw new NotFoundException('Users data not found!');
    }
    return userData;
  }

  async findOne(id: number): Promise<IUser> {
   const existingUser = await this.userModel.findById(id).exec();
   if (!existingUser) {
    throw new NotFoundException(`User #${id} not found`);
   }
   return existingUser;
  }

  async update(id: number, userDto: UserEditDto): Promise<IUser> {
    const existingUser = await this.userModel.findByIdAndUpdate(id, userDto, { new: true, timestamps: true });
   if (!existingUser) {
     throw new NotFoundException(`User #${id} not found`);
   }
   return existingUser;
  }

  async remove(id: number) : Promise<IUser> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return deletedUser;
  }
}
