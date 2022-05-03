import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.model';
import { Model } from 'mongoose';
import { AddUserDto } from './dto/user.dto';
import { passwordHash } from '../../resources/lib/bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private readonly usersModel: Model<User>) {}

  getUsers = () => this.usersModel.find();

  getOne = (params: User) => this.usersModel.findOne({ ...params });

  addUser = async (user: AddUserDto) => {
    const found = await this.usersModel.findOne({ email: user.email });

    if (found) {
      throw new HttpException(
        'This email already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const payload = { ...user, password: await passwordHash(user.password) };
    return this.usersModel.create(payload);
  };
}
