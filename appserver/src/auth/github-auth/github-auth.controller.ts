import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import * as qs from 'qs';

@Controller('auth/github')
export class GithubAuthController {
  constructor(private readonly configService: ConfigService) {}

  @Post('access_token')
  async githubCallback(@Body() body: any) {
    const { code, redirect_uri, code_verifier } = body;

    if (!code) {
      throw new HttpException('No code provided', HttpStatus.BAD_REQUEST);
    }

    try {
      const clientId = this.configService.get<string>('GITHUB_CLIENT_ID');
      const clientSecret = this.configService.get<string>(
        'GITHUB_CLIENT_SECRET',
      );

      // Exchange the received code for an access token
      const response = await axios.post(
        'https://github.com/login/oauth/access_token',
        qs.stringify({
          grant_type: 'authorization_code',
          client_id: clientId,
          client_secret: clientSecret,
          code,
          redirect_uri,
          code_verifier,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          },
        },
      );

      const { access_token, token_type, scope } = response.data;
      console.log('Access token received:', response.data);
      if (!access_token) {
        throw new HttpException(
          response?.data?.error_description ?? 'No access token received',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      return response.data;
      // // Return the same structure as the GitHub OAuth endpoint
      // return {
      //   access_token,
      //   token_type,
      //   scope,
      // };
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      throw new HttpException(
        error.response?.data?.error_description ??
          'Failed to exchange code for token',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
