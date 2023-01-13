import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [JobService],
  exports: [JobService],
})
export class JobModule {}
