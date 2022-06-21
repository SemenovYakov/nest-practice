import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}


   async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({
       email
    });
    return user;
  };

   async createUser(dto: CreateUserDto) {
    const user =  await this.usersRepository.save(dto);
    return user;
  }

  async getAll() {
    const users = await this.usersRepository.find()
    return users;
  };

}
