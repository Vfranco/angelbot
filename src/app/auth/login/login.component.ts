import { Component, Inject, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { AuthenticationFormFields, messageValidations } from '../../core/constants/authentication.fields';
import { IAuthRepository } from '../../domain/auth/auth.repository';
import { Router } from '@angular/router';
import { Status } from '../../core/constants/status.enum';

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
  messageValidations: messageValidations;

  constructor(private formBuilder: FormBuilder, @Inject('authRepository') private authService: IAuthRepository,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group(AuthenticationFormFields);
  }

  login(): void {
    this.authService.addUser(this.formGroup.value).subscribe(response => {
      console.log(response);
    })
  }

  homePage(): void {
    this.router.navigateByUrl('/admin/home');
  }

  get usernameField(): AbstractControl { return this.formGroup.get('username'); }
  get passwordField(): AbstractControl { return this.formGroup.get('password'); }
}
