import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { UsersPresenter } from "app/ui/users/presenter/users.persenter";

export const UsersPProvider: Provider = {
  provide: RepositoryProvider.usersPresenterProvider,
  useClass: UsersPresenter
}
