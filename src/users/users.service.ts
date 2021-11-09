import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  users = [
    {
      id: 0,
      name: 'lionel messi',
      email: 'lionel@messi.com',
      active: true
    },
    {
      id: 1,
      name: 'diego maradona',
      email: 'soyeldiego@maradona.com',
      active: true
    },
    {
      id: 2,
      name: 'sergio aguero',
      email: 'soyelkun@aguero.com',
      active: false
    },
  ]

  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log('createUser: ' + createUserDto);
    return await this.userRepository.create(createUserDto);
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
