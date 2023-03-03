import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAssessmentsModule } from './user-assessments/user-assessments.module';

@Module({
  imports: [UserAssessmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
