import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { LicensesPresenter } from "app/ui/licenses/presenter/licenses.presenter";

export const LicensesPProvider: Provider = {
  provide: RepositoryProvider.licensesPresenterProvider,
  useClass: LicensesPresenter
}
