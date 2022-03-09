import { Component, Inject, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { AuthenticationFormFields } from '@core/constants/authentication.fields';
import { IAuthRepository } from '@domain/auth/auth.repository';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse, HttpStatusCode } from "@angular/common/http";
import { ILocalStorageRepository } from '@domain/repository/localstorage.repository';
import { Redirection } from "@core/constants/authentication.enum";
import { Status } from "@core/constants/status.enum";
import { Authentication } from '../../domain/auth/auth.dto';

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
  isLoading: boolean = Status.notLoading;
  authenticationResponse: HttpResponse<any>;

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
    console.log('entra');
    this.isLoading = Status.isLoading;
    this.authService.authentication(this.formGroup.value).subscribe(
      response => {
        console.log('response',response);
        this.validateResponseAuthentication(response);
        this.authenticationResponse = response;
      },
      (error: HttpErrorResponse) => {
        this.errorAuthentication = error;
        this.isLoading = Status.notLoading;
      }
    );
  }

  private validateResponseAuthentication(response: HttpResponse<Authentication>): void {
    (response.status === HttpStatusCode.NoContent) ?
      this.errorNotNavegate = true : this.redirectAndSaveSesion(response);
    this.isLoading = Status.notLoading;
  }

  private redirectAndSaveSesion(response: HttpResponse<Authentication>): void {
    this.localstorageService.saveItem(Redirection.userSession, response.body)
    this.router.navigate([Redirection.home]);
  }

  get usernameField(): AbstractControl { return this.formGroup.get('username'); }
  get passwordField(): AbstractControl { return this.formGroup.get('password'); }
}
