import { Injectable } from '@nestjs/common';

import {
  userAssessments,
  usersAssessmentsGraph,
} from '../mock/user-assessments.constants';
import {
  UserAssessmentDto,
  UserAssessmentGraphDto,
} from './dto/user-assessment.dto';

@Injectable()
export class UserAssessmentsService {
  getUserAssessments(isAdmin: boolean): Promise<UserAssessmentDto[]> {
    return Promise.resolve(isAdmin ? userAssessments : [userAssessments[0]]);
  }
  getUserGraph(userId: number): Promise<UserAssessmentGraphDto> {
    return Promise.resolve(usersAssessmentsGraph[userId]);
  }
}
