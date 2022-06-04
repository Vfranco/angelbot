import { CorePresenter } from "@core/view/core.view";
import { DeleteLicense, GetLicense } from "@domain/licenses/licenses.dto";

export interface ILicensesPresenterInput extends CorePresenter{
  fetchData(): void;
  createLicense(): void;
  editLicense(): void;
  showModalWithLicenseData(license: GetLicense): void;
  deleteLicense(license: DeleteLicense): void;
  showFormToCreate(): void;
}
