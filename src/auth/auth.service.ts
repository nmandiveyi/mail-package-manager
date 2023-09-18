import {
  BadRequestException,
  Injectable as Service
} from '@nestjs/common';
import { Context } from 'src/context/context.service';
import {
  UserSigninDto,
  UserSignupDto
} from './auth.type';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Service()
export class AuthService {
  constructor(
    private context: Context,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  async signup(
    signupDto: UserSignupDto
  ): Promise<{ access_token: string }> {
    const hash = await argon.hash(
      signupDto.password
    );
    delete signupDto.password;

    try {
      const user = await this.context.user.create(
        {
          data: {
            ...signupDto,
            hash
          }
        }
      );

      delete user.hash;

      const { id: userId, email } = user;

      return this.signToken(userId, email);
    } catch (error) {
      if (
        error instanceof
        PrismaClientKnownRequestError
      ) {
        if (error.code === 'P2002') {
          throw new BadRequestException(
            'User credentials already taken'
          );
        }
      }
      throw error;
    }
  }

  async signin(
    signinDto: UserSigninDto
  ): Promise<{ access_token: string }> {
    const { email, password } = signinDto;

    const user =
      await this.context.user.findFirst({
        where: {
          email
        }
      });

    if (!user) {
      throw new BadRequestException(
        'No user with these credentials'
      );
    }

    const validateUser = await argon.verify(
      user.hash,
      password
    );

    if (!validateUser) {
      throw new BadRequestException(
        'Your password is incorrect'
      );
    }

    delete user.hash;

    const { id: userId } = user;

    return this.signToken(userId, email);
  }

  async signToken(
    userId: number,
    email: string
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email
    };

    const access_token = await this.jwt.signAsync(
      payload,
      {
        expiresIn: '15m',
        secret: this.config.get('AUTH_SECRET')
      }
    );

    return { access_token };
  }
}
