export interface LicensesDto {
  canAccess: boolean;
  id: number;
  companyId: number,
  name: string;
  statusId: number;
  statusName: string;
  status: boolean;
  code: string;
  companyName: string;
  dateInit: string;
  dateExpire: string;
}

export type CreateLicense = Pick<LicensesDto, 'companyId' | 'name' | 'code' | 'dateExpire'>;

export type UpdateLicense = Pick<LicensesDto, 'id' | 'dateInit' | 'dateExpire'>;

export type GetLicense = Omit<LicensesDto, 'companyId'>;

export type DeleteLicense = Pick<LicensesDto, 'id'>;