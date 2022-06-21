import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { RequestModule } from './request/request.module';
import { Request } from './request/request.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test_project',
      entities: [User,Request],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    RequestModule,
  ],
})
export class AppModule {}
