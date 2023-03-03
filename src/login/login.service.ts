import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { Users } from '../mock/login.mock';
import { throwNewError } from '../utils/helper.functions';

@Injectable()
export class LoginService {
  create(createLoginDto: LoginDto) {
    const result = Users.find(
      (user) =>
        user.email === createLoginDto.email &&
        user.password === createLoginDto.password,
    )?.ref;
    return result
      ? Promise.resolve(result)
      : throwNewError(
          'User not found. Check that the data you entered is correct',
        );
  }
}
