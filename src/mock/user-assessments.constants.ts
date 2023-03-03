import {
  UserAssessmentDto,
  UserAssessmentGraphDto,
} from '../user-assessments/dto/user-assessment.dto';

export const userAssessments: UserAssessmentDto[] = [
  {
    id: 1,
    name: 'Core Drivers',
    users_resolved: 5,
    active: true,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpKuhQnt2Gn5wm0usuP2QK8CB5z8_yBB8oQ&usqp=CAU',
  },
  {
    id: 2,
    name: 'Stress Test',
    users_resolved: 10,
    active: false,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NL_oubZzB0fIH0wOF7eBaVGxE4ySd1QDz3m5YXIi8rcB9b3fMcZSy14hsGFAgLo0Xac&usqp=CAU',
  },
  {
    id: 3,
    name: 'Leadership Styles',
    users_resolved: 7,
    active: true,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExtoLVhMIfPRj_8d5RQKF2qjwUbuYL2tZTg&usqp=CAU',
  },
  {
    id: 4,
    name: 'Career Values',
    users_resolved: 15,
    active: false,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQwn4a_TR68qjoCIrzfFtBnUmnd0KvnsG7A&usqp=CAU',
  },
  {
    id: 5,
    name: 'Emotional Intelligence',
    users_resolved: 8,
    active: true,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSff8JL9ALjQrQ11mS8MNLOGgyOXjRTJEckCA&usqp=CAU',
  },
  {
    id: 6,
    name: 'Communication Styles',
    users_resolved: 12,
    active: false,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqOpleaIJXTcnOmbywkrgM8kWXB9QUVa_cA&usqp=CAU',
  },
  {
    id: 7,
    name: 'Time Management',
    users_resolved: 6,
    active: true,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdX029ohIUSygq9zirl9fSNBwSLqEOaKEYuw&usqp=CAU',
  },
  {
    id: 8,
    name: 'Conflict Management',
    users_resolved: 9,
    active: false,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ncY-heISk8kAf3J_MXmEi2Utnl0LsgsfQg&usqp=CAU',
  },
  {
    id: 9,
    name: 'Decision Making',
    users_resolved: 11,
    active: true,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4rN33PyWHKh1AnV91DHPLsB-t-FEAjS2eA&usqp=CAU',
  },
  {
    id: 10,
    name: 'Team Building',
    users_resolved: 4,
    active: false,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqffFu_JEH6yhJUG4cX5rfhabtgRUlblRUEJ7smPK5xSvdjGqS35k7yiBAchjJAlXbWhI&usqp=CAU',
  },
];

export const usersAssessmentsGraph: UserAssessmentGraphDto[] = [
  {
    data: {
      agreeableness: 13.333,
      drive: 22.456,
      luck: 8.921,
      openness: 27.563,
    },
    type: 'bar',
  },
  {
    data: {
      agreeableness: 15.678,
      drive: 17.891,
      luck: 11.345,
      openness: 22.456,
    },
    type: 'bar',
  },
  {
    data: {
      agreeableness: 11.234,
      drive: 20.789,
      luck: 12.345,
      openness: 25.456,
    },
    type: 'bar',
  },
  {
    data: {
      agreeableness: 14.345,
      drive: 18.234,
      luck: 9.876,
      openness: 29.678,
    },
    type: 'bar',
  },
  {
    data: {
      agreeableness: 17.789,
      drive: 15.456,
      luck: 13.456,
      openness: 20.345,
    },
    type: 'bar',
  },
  {
    data: {
      agreeableness: 10.567,
      drive: 19.567,
      luck: 14.123,
      openness: 23.456,
    },
    type: 'bar',
  },
  {
    data: {
      agreeableness: 12.345,
      drive: 21.234,
      luck: 10.234,
      openness: 26.456,
    },
    type: 'bar',
  },
  {
    data: {
      agreeableness: 16.789,
      drive: 16.789,
      luck: 11.789,
      openness: 24.567,
    },
    type: 'bar',
  },
  {
    data: {
      agreeableness: 13.456,
      drive: 23.456,
      luck: 8.456,
      openness: 26.345,
    },
    type: 'bar',
  },
  {
    data: {
      agreeableness: 14.789,
      drive: 18.456,
      luck: 12.456,
      openness: 23.234,
    },
    type: 'bar',
  },
];
