import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { UsersServices } from "@core/services/users.service";

export const UserProvider: Provider = {
  provide: RepositoryProvider.usersRepository,
  useClass: UsersServices
}
