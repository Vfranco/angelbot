import { Provider } from "@angular/core";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { AuthService } from "@core/services/auth.service";

export const AuthProvider: Provider = {
  provide: 'authRepository',
  useClass: AuthService
}
