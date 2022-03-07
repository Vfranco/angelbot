import { Validators } from "@angular/forms";
import { IAuthenticationFields } from "@core/validators/authform.validator";

export const AuthenticationFormFields: IAuthenticationFields = {
  username: ['', [Validators.required, Validators.minLength(4)]],
  password: ['', [Validators.required, Validators.minLength(6)]]
}

export enum messageValidations {
  MIN_LENGTH_PASSWORD = 'Su usuario debe tener mínimo 4 caracteres',
  MIN_LENGTH_USERNAME = 'Su contraseña debe tener mínimo 6 caracteres',
  USERNAME_REQUIRED = 'Por favor diligenciar su username',
  PASSWORD_REQUIRED = 'Por favor diligenciar su contraseña'
}
