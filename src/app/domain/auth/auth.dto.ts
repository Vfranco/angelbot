export interface AuthenticationDto {
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  token: string,
  rolId: number,
  expirationToken: string
}

export type UserCredentials = Pick<AuthenticationDto, 'username' | 'password'>;

export type Authentication = Omit<AuthenticationDto, 'username' | 'password'>;
