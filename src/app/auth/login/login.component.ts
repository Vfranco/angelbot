import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthenticationFormFields } from '../../core/constants/authentication.fields';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    class: "authentication"
  }
})
export class AuthLoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group(AuthenticationFormFields);
  }

  authentication() {
    console.log(this.formGroup.value);
  }

  get usernameField() { return this.formGroup.get('username'); }
  get passwordField() { return this.formGroup.get('password'); }
}
