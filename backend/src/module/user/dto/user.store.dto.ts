import { IsBoolean, IsNotEmpty, IsString, IsEmail, IsOptional, Validate } from "class-validator";
import { UniqueValidator } from "src/helpers/unique-validator";

export class UserStoreDto {
    
    @IsString()
    @IsNotEmpty()
    public name: string;
    
    @IsEmail()
    @IsNotEmpty()
    @Validate(UniqueValidator, ['email'], {
      message: 'Email already exists',
    })
    public email: string;
    
    @IsBoolean()
    @IsOptional()
    public active?: boolean;
}
