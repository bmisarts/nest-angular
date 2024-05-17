import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserStoreDto } from './dto/user.store.dto';
import { JsonResponse } from 'src/helpers/json-response';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jsonResponse: JsonResponse
  ) {}

  @Post()
  create(@Body() uerDto: UserStoreDto) {
    this.userService.create(uerDto);
    
    return this.jsonResponse.success('Utilisateur crée avec succes.')
  }

  @Get()
  findAll() {
    let users = this.userService.findAll();
    
    return this.jsonResponse.success('Utilisateur crée avec succes.', users)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let user = this.userService.findOne(+id);
    
    return this.jsonResponse.success('', user)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() uerDto: UserStoreDto) {
    this.userService.update(+id, uerDto);
    
    return this.jsonResponse.success('Utilisateur modifié avec succes.')
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.userService.remove(+id);
    return this.jsonResponse.success('Utilisateur supprimé avec succes.',)
  }
}
