import { Module } from '@nestjs/common';

import { UserAssessmentsService } from './user-assessments.service';
import { UserAssessmentsController } from './user-assessments.controller';

@Module({
  controllers: [UserAssessmentsController],
  providers: [UserAssessmentsService],
})
export class UserAssessmentsModule {}
