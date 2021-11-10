import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    return await this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    // Return the whole list of users
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    // Search and return the user by id
    // TODO: handle unexistance
    return await this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
    console.log(`This action updated user #${id}`);
    // TODO: handle unexistance
    await this.userRepository.update(id, updateUserDto);
    return

  }

  async remove(id: number): Promise<void> {
    console.log(`Remove: id ${id}`)
    // TODO handle unexistance
    await this.userRepository.delete(id);
  
  }
}
