import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JobModule } from './job/job.module';

@Module({
  imports: [AuthModule, UsersModule, JobModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
