import { CorePresenter } from "@core/view/core.view";
import { DeleteCompanie, GetCompanie } from "@domain/companies/companie.dto";

export interface ICompaniesPresenterInput extends CorePresenter {
  createCompanie(): void;
  editCompanie(): void;
  deleteCompanie(companie: DeleteCompanie): void;
  showModalWithCompanieData(companie: GetCompanie): void;
  showFormToCreate(): void;
  fetchData(): void;
}
