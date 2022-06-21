import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { LoginUser } from 'src/users/dto/login-user-dto';

@Injectable()
export class AuthService {
 constructor(private userService: UsersService) {}

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'Пользователь с таким email существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return user;
  }

  async login(loginDto: LoginUser) {
    const user = await this.validateUser(loginDto);
    return user;
  }

  private async validateUser(userDto: LoginUser) {
    const user = await this.userService.getUserByEmail(userDto.email);
    if (!user) {
      throw new UnauthorizedException({
        message: 'Email не найден',
      });
    }
    if (user != null) {
      const passwordEquals = await bcrypt.compare(
        userDto.password,
        user.password,
      );
      if (!passwordEquals) {
        throw new UnauthorizedException({
          message: 'Неверный пароль',
        });
      }
    }
    return user;
  }
}
