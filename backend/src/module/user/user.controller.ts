import { Controller, Get, Post, Body, Param, Delete, Put, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { UserStoreDto } from './dto/user.store.dto';
import { JsonResponse } from 'src/helpers/json-response';
import { UserEditDto } from './dto/user.edit.dto';
import { validate } from 'class-validator';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jsonResponse: JsonResponse
  ) {}

  @Post()
  async create(@Body() userDto: UserStoreDto) {
    await this.userService.create(userDto);
    
    return this.jsonResponse.success('Utilisateur crée avec succes.')
  }

  @Get()
  async findAll() {
    let users = await this.userService.findAll();
    
    return this.jsonResponse.success('Utilisateur crée avec succes.', users)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let user = await this.userService.findOne(+id);
    
    return this.jsonResponse.success('', user)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() uerDto: UserEditDto) {
    await this.userService.update(+id, uerDto);
    
    return this.jsonResponse.success('Utilisateur modifié avec succes.')
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.userService.remove(+id);
    return this.jsonResponse.success('Utilisateur supprimé avec succes.',)
  }
}
