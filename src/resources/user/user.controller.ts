import { BadRequestException, Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/auth.guard';
import { GetUser } from './user.decorator';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {

  constructor( private userService: UserService ){}

  @Get('me')
  async getMe( @GetUser() user: any): Promise<User>{
    const {
      sub: id
    } = user;
    try {
      return await this.userService.getMe(id)
    } catch (error) {
      throw new BadRequestException((error as Error).message)
    }
  }
}
