import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request-dto';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {
  constructor(
    private requestService: RequestService,
  ) {}

    @Get()
     async getAllRequests() {
     const requests = await this.requestService.getAllRequests();
    return requests
  }

    @Post()
     async createRequest(@Body() requestDto: CreateRequestDto) {
     const request = await this.requestService.createRequest(requestDto);
    return request
  }
}
