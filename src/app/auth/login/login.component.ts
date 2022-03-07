import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup} from "@angular/forms";
import { AuthenticationFormFields } from '../../core/constants/authentication.fields';
import { IUser } from '../../domain/auth/auth.dto';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    class: "authentication"
  }
})
export class AuthLoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.myForm = this.formBuilder.group(AuthenticationFormFields);
  }

  authentication(){
    console.log(this.myForm.value);
  }

  get usernameField() { return this.myForm.get('username'); }
  get passwordField() { return this.myForm.get('password'); }
}
