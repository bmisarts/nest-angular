import { IsBoolean, IsNotEmpty, IsString, IsEmail, IsOptional } from "class-validator";
import { IsUnique } from "src/helpers/unique-constraint-validator";
import { User } from "../entities/user.entity";

export class UserStoreDto {

    
    @IsString()
    @IsNotEmpty()
    public name: string;
    
    @IsEmail()
    @IsNotEmpty()
    @IsUnique('email', 'users', {
      message: 'Email must be unique',
    })
    public email: string;
    
    @IsBoolean()
    @IsOptional()
    public active?: boolean;
}
