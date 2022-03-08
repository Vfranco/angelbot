import { Provider } from "@angular/core";
import { AuthService } from "@core/services/auth.service";

export const AuthProvider: Provider = {
  provide: 'authRepository',
  useClass: AuthService
}
