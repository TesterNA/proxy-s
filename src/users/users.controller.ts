import { Controller, Get, UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { RoleGuard } from '../role/role.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @UseGuards(RoleGuard)
  users(): Promise<UserDto[]> {
    return this.usersService.getUsers();
  }
}
