import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    //Todo : auto parse to id
    return this.usersService.findOne(id);
  }

  @Post()
  createUser(@Body('name') body: CreateUserDto): User {
    return this.usersService.create(body);
  }
}
