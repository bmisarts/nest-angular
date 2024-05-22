import { PartialType } from '@nestjs/mapped-types';
import { UserStoreDto } from "./user.store.dto";

export class UserEditDto  extends PartialType(UserStoreDto) {}
