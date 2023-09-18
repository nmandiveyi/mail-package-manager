import {
  BadRequestException,
  Injectable as Service
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  UserSigninDto,
  UserSignupDto
} from './auth.type';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Service()
export class AuthService {
  constructor(
    private prismaService: PrismaService
  ) {}

  async signup(signupDto: UserSignupDto) {
    const hash = await argon.hash(
      signupDto.password
    );
    delete signupDto.password;

    try {
      const user =
        await this.prismaService.user.create({
          data: {
            ...signupDto,
            hash
          }
        });

      delete user.hash;
      return user;
    } catch (error) {
      if (
        error instanceof
        PrismaClientKnownRequestError
      ) {
        if (error.code === 'P2002') {
          return new BadRequestException(
            'User credentials already taken'
          );
        }
      }
    }
  }

  async signin(signinDto: UserSigninDto) {
    const { email, password } = signinDto;

    const user =
      await this.prismaService.user.findFirst({
        where: {
          email
        }
      });

    if (!user) {
      return new BadRequestException(
        'No user with these credentials'
      );
    }

    const validateUser = await argon.verify(
      user.hash,
      password
    );

    if (!validateUser) {
      return new BadRequestException(
        'Your password is incorrect'
      );
    }

    delete user.hash;

    return user;
  }
}
