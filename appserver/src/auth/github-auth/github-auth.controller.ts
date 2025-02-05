import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Controller('auth/github')
export class GithubAuthController {
  constructor(private readonly configService: ConfigService) {}

  @Get('callback')
  async githubCallback(@Query('code') code: string) {
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
        {
          client_id: clientId,
          client_secret: clientSecret,
          code,
          redirect_uri: 'http://localhost:8081/auth/callback',
        },
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      const { access_token } = response.data;
      console.log('Access token received:', response);
      if (!access_token) {
        throw new HttpException(
          response?.data?.error_description ?? 'No access token received',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      // You could store the token in a session or return it directly
      // For simplicity, we'll just return it as JSON. (Note: In production, think carefully about how you manage tokens!)
      return { accessToken: access_token };
    } catch (error) {
      console.error('Error exchanging code for token:', error);
      throw new HttpException(
        'Failed to get access token',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
