import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAssessmentsModule } from './user-assessments/user-assessments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UserAssessmentsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
