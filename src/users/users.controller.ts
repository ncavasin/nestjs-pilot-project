import { Controller, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GrpcMethod } from '@nestjs/microservices';
import { User } from './entities/users.entity';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //@Post()
  @GrpcMethod()
  create(@Body() createUserDto: CreateUserDto){
    return this.usersService.create(createUserDto);
  }

  //@Get(':id')

  @GrpcMethod()
  findById(@Param('id') id: string) {
    return this.usersService.findById(+id);
  }
  @GrpcMethod()
  findByDni(dni: number): Promise<User> {
    return this.usersService.findByDni(dni);
  }

  @GrpcMethod()
  findByName(name: string): Promise<User> {
    return this.usersService.findByName(name);
  }

  //@Get()
  @GrpcMethod()
  findAll() {
    return this.usersService.findAll();
  }

  //@Patch(':id')
  @GrpcMethod()
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  //@Delete(':id')
  @GrpcMethod()
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
