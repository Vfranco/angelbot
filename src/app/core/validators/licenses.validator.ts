import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface ILicensesField {
  id?: (number | ((control: AbstractControl) => ValidationErrors))[];
  name: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  statusId?: (number | ((control: AbstractControl) => ValidationErrors))[];
  statusName: (string | ((control: AbstractControl) => ValidationErrors))[];
  code: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  companyId: (number | ((control: AbstractControl) => ValidationErrors))[];
  companyName?: (string | ((control: AbstractControl) => ValidationErrors)[])[];
  dateInit: (string | ((control: AbstractControl) => ValidationErrors))[];
  dateExpire: (string | ((control: AbstractControl) => ValidationErrors))[];
}

export type CreateLicenseForm = Omit<ILicensesField, 'statusName'>;
