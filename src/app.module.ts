import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAssessmentsModule } from './user-assessments/user-assessments.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UserAssessmentsModule],
  imports: [LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
