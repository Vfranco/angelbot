import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { GetLicense } from "@domain/licenses/licenses.dto";
import { IModalComboBox } from "@shared/customs/combobox/IComboboxComponent";

export interface ILicensesPresenterOutput {
  modalLicense: IModalComponent;
  comboboxComponent: IModalComboBox;
  dataTableHead: string[];
  formLicense: FormGroup;
  requestBody: IFilterRequestBody;
  licenseData: GetLicense[];
  isEditLicense: boolean;
  licenseErrorService: HttpErrorResponse;
  showErrorLicenseService: boolean;
  fetchData():void;
}
