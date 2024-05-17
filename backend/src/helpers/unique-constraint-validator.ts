import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { DbService } from 'src/config/db/db.service';

@ValidatorConstraint({ async: false })
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [property, table] = args.constraints;
    const count = DbService[table].filter(item => item[property] === value).length;
    return count === 0;
  }

  defaultMessage(args: ValidationArguments) {
    const [property] = args.constraints;
    return `${property} must be unique.`;
  }
}

export function IsUnique(property: string, table: any, validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property, table],
      validator: IsUniqueConstraint,
    });
  };
}
