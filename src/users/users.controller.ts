import { Controller, Get } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  users(): Promise<UserDto[]> {
    return this.usersService.getUsers();
  }
}
