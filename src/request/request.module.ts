import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestController } from './request.controller';
import { Request } from './request.model';
import { RequestService } from './request.service';

@Module({
  controllers: [RequestController],
  providers: [RequestService],
    imports:[
    TypeOrmModule.forFeature([Request])
  ]
})
export class RequestModule {}
