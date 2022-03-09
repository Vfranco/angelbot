import { Validators } from '@angular/forms';
import { CreateLicenseForm } from '@core/validators/licenses.validator';

export const licensesField: CreateLicenseForm = {
  id: [0],
  name: ['', [Validators.required, Validators.min(2)]],
  statusId: [0],
  code: ['', [Validators.required, Validators.min(3)]],
  companyId: [0],
  dateInit: ['', Validators.required],
  dateExpire: ['', Validators.required],
};
