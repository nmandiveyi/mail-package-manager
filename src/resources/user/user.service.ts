import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Context } from 'src/context/context.service';

@Injectable()
export class UserService {

  constructor(private context: Context){}

  async getMe(id: number): Promise<User> {
    const user = await this.context.user.findUnique({
      where: {
        id
      }
    });

    delete user.hash;
    return user;
  }
}
