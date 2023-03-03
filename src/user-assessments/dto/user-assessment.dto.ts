export class UserAssessmentDto {
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url: string;
}

export class UserAssessmentGraphDto {
  data: {
    agreeableness: number;
    drive: number;
    luck: number;
    openness: number;
  };
  type: string;
}
