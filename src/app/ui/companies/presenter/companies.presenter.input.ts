import { FormGroup } from "@angular/forms";
import { CorePresenter } from "@core/view/core.view";
import { DeleteCompanie, GetCompanie } from "@domain/companies/companie.dto";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";

export interface ICompaniesPresenterInput extends CorePresenter {
  createCompanie(formCompanie:FormGroup): void;
  editCompanie(formCompanie:FormGroup): void;
  deleteCompanie(companie: DeleteCompanie): void;
  showModalWithCompanieData(companie: GetCompanie): void;
  showFormToCreate(): void;
  fetchData(requestBody: IFilterRequestBody): void;
}
