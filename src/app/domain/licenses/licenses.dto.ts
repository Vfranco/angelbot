export interface LicensesDto {
  id: number;
  companyId: number;
  name: string;
  nit: string;
  email: string;
  address: string;
  statusId: number;
  statusName: string;
  status: boolean;
  code: string;
  companyName: string;
  dateInit: string;
  dateExpire: string;
}

export type CreateLicense = Omit<LicensesDto, 'id' | 'statusId' | 'statusName' | 'status' | 'companyName' | 'dateInit'>;

export type UpdateLicense = Pick<LicensesDto, 'id' | 'name' | 'nit' | 'email' | 'address'>;

export type GetLicense = Pick<LicensesDto, 'id' | 'name' | 'statusId' | 'statusName' | 'code' | 'companyName' | 'dateInit' | 'dateExpire'>;

export type DeleteLicense = Pick<LicensesDto, 'id'>;