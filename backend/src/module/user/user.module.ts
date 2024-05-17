import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { DbService } from 'src/config/db/db.service';
import { UserFakers } from './fakers/user.fakers';
import { JsonResponse } from 'src/helpers/json-response';

@Module({
  controllers: [UserController],
  providers: [UserService,DbService,UserRepository,UserFakers,JsonResponse],
  exports: [UserRepository,UserFakers]
})
export class UserModule {}
