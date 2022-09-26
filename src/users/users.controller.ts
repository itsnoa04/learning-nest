import { Controller, Get, Param } from '@nestjs/common';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): any {
    return users;
  }

  @Get(':id')
  getUserById(@Param('id') id: string): any {
    return users.find((user) => user.id === parseInt(id));
  }
}
