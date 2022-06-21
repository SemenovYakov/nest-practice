import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { LoginUser } from 'src/users/dto/login-user-dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

    @Post('/registration')
     async registration(@Body() userDto: CreateUserDto) {
     const userData = await this.authService.registration(userDto);
    return userData
  }

  @Post('/login')
  async login(@Body() loginDto: LoginUser) {
    const userData = await this.authService.login(loginDto);
  return userData
  }
}
