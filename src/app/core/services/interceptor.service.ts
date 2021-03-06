import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { Navigation } from "@core/constants/navigataion.enum";
import { ILocalStorageRepository } from "@domain/repository/localstorage.repository";
import { UserDto } from "@domain/users/user.dto";
import { Observable } from "rxjs";

@Injectable()
export class HttpConfigService implements HttpInterceptor {

  constructor(@Inject('localstorageRepository') private localStorage: ILocalStorageRepository) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const getToken: UserDto = this.localStorage.getItem(Navigation.userSession);
    let request = req;

    if (getToken) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${getToken.token}`
        }
      })
    }

    return next.handle(request);
  }
}

export const authInterceptorProvider: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpConfigService, multi: true }
]
