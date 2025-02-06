import { Module } from '@nestjs/common';
import { GithubAuthController } from './github-auth/github-auth.controller';

@Module({
  controllers: [GithubAuthController]
})
export class AuthModule {}
