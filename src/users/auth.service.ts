import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  signup(email: string, password: string) {
    // See if email in in use
    const users = this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }
    // Hash the users password
    // Create a new user and save it
    // return the user
  }

  signin() {}
}
