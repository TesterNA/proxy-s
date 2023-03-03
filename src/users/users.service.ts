import { Injectable } from '@nestjs/common';

import { UserDto } from './dto/user.dto';
import { users } from '../mock/users.constants';

@Injectable()
export class UsersService {
  getUsers(): Promise<UserDto[]> {
    return Promise.resolve(users);
  }
}
