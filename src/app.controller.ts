import {
  Controller,
  Get,
  Post,
  Param,
  Request,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { AuthService } from './auth/auth.service';
import { JobService } from './job/job.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private readonly jobService: JobService,
  ) {}

  @Get('/job')
  async getJobs() {
    return this.jobService.findAll();
  }

  @Get('/job/:id')
  async getJob(@Param('id') id) {
    return this.jobService.findOne(id);
  }

  @Post('/job/search')
  async getSearch(@Body() fields: any) {
    const desc = fields.description.toLowerCase();
    const loc = fields.location.toLowerCase();
    return this.jobService.findSearch(desc, loc);
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
