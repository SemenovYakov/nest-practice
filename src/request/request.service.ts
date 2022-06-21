import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRequestDto } from './dto/create-request-dto';
import { Request } from './request.model';

@Injectable()
export class RequestService {
    constructor(
    @InjectRepository(Request)
    private requestRepository: Repository<Request>,
  ) {}

   async createRequest(requestdto: CreateRequestDto) {
    const request =  await this.requestRepository.save(requestdto);
    return request;
  }

   async getAllRequests() {
    const user =  await this.requestRepository.find()
    return user;
  }
}
