export interface UserDto {
  id?: number;
  firstName: string;
  lastName: string;
  username?: string;
  password?: string;
  phoneNumber?: string;
  statusName?: string;
  statusId?: number;
  roleId?: number;
  roleName?: string;
  companyId?: string;
  companyName?: string;
  token?: string;
  rolId: number;
  expirationToken?: string;
}

export type ChangePassword = Pick<UserDto, 'password'>;
