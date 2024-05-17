import { IsBoolean, IsNotEmpty, IsString, IsEmail, IsOptional, Validate } from "class-validator";
import { IsUnique } from "src/helpers/unique-constraint-validator";

export class UserEditDto {
    
    @IsString()
    @IsNotEmpty()
    public name: string;
    
    @IsBoolean()
    @IsOptional()
    public active?: boolean;
}
