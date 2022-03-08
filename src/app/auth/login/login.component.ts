import { Component, Inject, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { AuthenticationFormFields } from '@core/constants/authentication.fields';
import { IAuthRepository } from '@domain/auth/auth.repository';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse, HttpStatusCode } from "@angular/common/http";
import { ILocalStorageRepository } from '@domain/repository/localstorage.repository';
import { DtoResponseAuthLogin } from '@domain/auth/auth.dto';
import { Redirection } from "@core/constants/authentication.enum";

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
  errorNotNavegate: boolean = false;
  errorAuthentication: HttpErrorResponse;
  authenticationResponse: HttpResponse<any>

  constructor(private formBuilder: FormBuilder,
    @Inject('authRepository') private authService: IAuthRepository,
    private router: Router,
    @Inject('localstorageRepository') private localstorageService: ILocalStorageRepository) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group(AuthenticationFormFields);
  }

  login(): void {
    this.authService.addUser(this.formGroup.value).subscribe(
      response => {
        this.validateResponseAuthentication(response);
        this.authenticationResponse = response;
      },
      (error: HttpErrorResponse) => {
        this.errorAuthentication = error;
      }
    );
  }

  private validateResponseAuthentication(response: HttpResponse<DtoResponseAuthLogin>): void {
    (response.status === HttpStatusCode.NoContent) ?
      this.errorNotNavegate = true : this.redirectAndSaveSesion(response);
  }

  private redirectAndSaveSesion(response: HttpResponse<DtoResponseAuthLogin>): void {
    this.localstorageService.saveItem(Redirection.userSession, response.body)
    this.router.navigate([Redirection.home]);
  }

  get usernameField(): AbstractControl { return this.formGroup.get('username'); }
  get passwordField(): AbstractControl { return this.formGroup.get('password'); }
}
