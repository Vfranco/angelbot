import { Validators } from "@angular/forms";
import { IAuthenticationFields } from "@core/validators/authform.validator";

export const AuthenticationFormFields: IAuthenticationFields = {
  username: ['', Validators.required],
  password: ['', [Validators.required,Validators.minLength(6)]]
}
