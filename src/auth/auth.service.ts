import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

type AuthInput = { email: string; password: string };
type SignInData = { userId: number; email: string };
type AuthReslt = { accessToken: string; userId: number; userName: string };

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async authenticate(input: AuthInput): Promise<AuthReslt> {
    const user = await this.validateUser(input);

    if (!user) {
      throw new UnauthorizedException();
    }

    return this.signIn(user);
  }

  async validateUser(input: AuthInput): Promise<SignInData | null> {
    const user = await this.databaseService.user.findUnique({
      where: { email: input.email },
    });

    if (user) {
      const isPasswordValid = await bcrypt.compare(
        input.password,
        user.password,
      );

      if (isPasswordValid) {
        return { userId: user.id, email: user.email };
      }
    }

    return null;
  }

  async signIn(user: SignInData): Promise<AuthReslt> {
    const tokenPayload = { sub: user.userId, email: user.email };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      accessToken,
      userId: user.userId,
      userName: user.email,
    };
  }
}
