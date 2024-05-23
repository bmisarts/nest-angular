import { InjectModel } from "@nestjs/mongoose";
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { Model } from "mongoose";
import { IUser } from "src/module/user/schema/user.schema";

@ValidatorConstraint({ name: "IsUniqueUser", async: true })
export class UniqueValidator implements ValidatorConstraintInterface {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<IUser>,
  ) {}

  async validate(value: any, args: ValidationArguments) {
    const filter = {};
    filter[args.property] = value;
    const count = await this.userModel.findOne(filter);
    return !count;
  }

  defaultMessage(args: ValidationArguments) {
    return "$(value) is already taken";
  }
}