export interface IUser {
  username: string,
  password: string
}

export interface DtoResponseAuthLogin {
  firstName: string,
  lastName: string,
  token: string,
  rolId: number,
  expirationToken: string
}
