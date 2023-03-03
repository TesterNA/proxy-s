import { LoginDto, UserCredentialsDto } from '../login/dto/login.dto';

export const AdminCredentials: UserCredentialsDto = {
  first_name: 'Admin',
  last_name: 'Deepersignals',
  role: 'Admin',
  token: 'QWRtaW5Vc2Vy',
};

export const UserCredentials: UserCredentialsDto = {
  first_name: 'User',
  last_name: 'Deepersignals',
  role: 'User',
  token: 'bKfPSC2rQ1Mg',
};
export const Users: Array<LoginDto & { ref: UserCredentialsDto }> = [
  {
    email: 'admin@deepersignals.com',
    password: 'password',
    ref: AdminCredentials,
  },
  {
    email: 'user@deepersignals.com',
    password: 'password',
    ref: UserCredentials,
  },
];
