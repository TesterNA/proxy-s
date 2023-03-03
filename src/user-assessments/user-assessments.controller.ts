import { Controller, Get, Query, Req } from "@nestjs/common";

import { UserAssessmentsService } from './user-assessments.service';
import {
  UserAssessmentDto,
  UserAssessmentGraphDto,
} from './dto/user-assessment.dto';

@Controller('userassessments')
export class UserAssessmentsController {
  constructor(
    private readonly userAssessmentsService: UserAssessmentsService,
  ) {}

  @Get()
  userAssessments(
    @Req() req: { isAdmin: boolean },
  ): Promise<UserAssessmentDto[]> {
    return this.userAssessmentsService.getUserAssessments(req.isAdmin);
  }

  @Get('graph')
  graph(@Query('id') userId: number): Promise<UserAssessmentGraphDto> {
    return this.userAssessmentsService.getUserGraph(userId);
  }
}
