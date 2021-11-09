import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

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

  create(createUserDto: CreateUserDto): string {
    console.log('createUser: ' + createUserDto);
    this.users.push(createUserDto);
    return `User ${createUserDto.id} created`;
  }

  findAll(): User[] {
    // Return the whole list of users
    return this.users;
  }

  findOne(id: number): User {
    // Search and return the user by id

    // TODO: handle unexistance
    return this.users.find(user => user.id == id);
  }

  update(id: number, updateUserDto: UpdateUserDto): string {
    // Search for user existance by id
    let user:User = this.users.find(user => user.id == id);
    console.log('updateUser: id found');

    // If not exists
    // TODO return 404

    // If exists, update
    this.users[this.users.indexOf(user)] = updateUserDto;

    return `This action updated user #${id}`;
  }

  remove(id: number) {
    let index = this.users.indexOf(this.users.find(user => user.id == id));
    
    // TODO handle unexistance

    if(index > -1){
      this.users.splice(index, 1);
    }
    
    return `This action removed user #${id}`;
  }
}
