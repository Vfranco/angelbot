import { FormGroup } from "@angular/forms";
import { CorePresenter } from "@core/view/core.view";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { DeleteLicense, GetLicense } from "@domain/licenses/licenses.dto";

export interface ILicensesPresenterInput extends CorePresenter {
  fetchData(requestBody: IFilterRequestBody): void;
  createLicense(formLicense: FormGroup): void;
  editLicense(formLicense: FormGroup): void;
  showModalWithLicenseData(license: GetLicense): void;
  deleteLicense(license: DeleteLicense): void;
  showFormToCreate(): void;
}
