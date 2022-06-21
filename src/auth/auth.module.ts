import { Module , forwardRef} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService,UsersService],
    imports: [
    TypeOrmModule.forFeature([User]),
  ],
})
export class AuthModule {}
