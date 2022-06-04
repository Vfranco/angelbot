import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { companiesPresenter } from "app/ui/companies/presenter/companies.presenter";

export const CompaniesPProvider: Provider = {
  provide: RepositoryProvider.companiesPresenterProvider,
  useClass: companiesPresenter
}
