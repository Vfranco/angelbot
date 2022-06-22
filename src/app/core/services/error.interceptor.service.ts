import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { Navigation } from "@core/constants/navigataion.enum";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import swal, { SweetAlertResult } from 'sweetalert2';
import { ILocalStorageRepository } from '../../domain/repository/localstorage.repository';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    @Inject('localstorageRepository') private localstorageService: ILocalStorageRepository,
    private _router: Router) { }

  intercept(req: HttpRequest<HttpErrorResponse>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {

      if (error.status === HttpStatusCode.Unauthorized) {
        this.localstorageService.removeItem();
        this._router.navigate([Navigation.login]);
      }

      if(error.status >= HttpStatusCode.InternalServerError || error.status >= HttpStatusCode.NotFound)
         console.log('error', error)
      return throwError(error);
    }));
  }
}

export const errorInterceptorProvider: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
]
