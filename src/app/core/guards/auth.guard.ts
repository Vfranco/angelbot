import { Inject, Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ILocalStorageRepository } from "@domain/repository/localstorage.repository";
import { Redirection } from '@core/constants/authentication.enum';
import { Authentication } from '../../domain/auth/auth.dto';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router, @Inject('localstorageRepository') private localstorageService: ILocalStorageRepository
  ) { }

  canActivate(): boolean {
    let userSession : Authentication = this.localstorageService.getItem(Redirection.userSession);
    return (userSession) ? true : this.redirectToLogin();
  }

  private redirectToLogin(): boolean {
    this.router.navigate([Redirection.login]);
    return false;
  }
}
