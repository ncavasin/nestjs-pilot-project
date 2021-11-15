import { Controller, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entity';
import { GrpcMethod } from '@nestjs/microservices';

//@Injectable()
@Controller()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  @GrpcMethod()
  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(`This action created user ${createUserDto.name}`);
    return await this.userRepository.save(createUserDto);
  }

  @GrpcMethod()
  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  @GrpcMethod()
  async findByDni(dni: number): Promise<User> {
    return await this.userRepository.findOne(dni);
  }

  @GrpcMethod()
  async findByName(name: string): Promise<User> {
    return await this.userRepository.findOne(name);
  }

  @GrpcMethod()
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  @GrpcMethod()
  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<void> {
    console.log(`This action updated user #${id}`);
    await this.userRepository.update(id, updateUserDto);
    return

  }

  @GrpcMethod()
  async deleteUser(id: number): Promise<void> {
    console.log(`This action removed user #${id}`)
    await this.userRepository.delete(id);
  
  }
}
