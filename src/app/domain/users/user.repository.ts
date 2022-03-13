import { HttpResponse } from "@angular/common/http";
import { IUsersField } from "@core/validators/usersform.validator";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { IResponseBodyDto } from "@domain/http/response.body.dto";
import { Observable } from "rxjs";
import { ChangePassword, UserDto } from "./user.dto";

export interface IUserRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBodyDto>>
  createUser(payload: IUsersField): Observable<HttpResponse<any>>
  updateUser(payload: IUsersField): Observable<HttpResponse<any>>
  getUserById(id: number): Observable<HttpResponse<UserDto>>
  deleteUser(id: number, status: number): Observable<HttpResponse<any>>
  changePassword(id: number, payload: ChangePassword): Observable<HttpResponse<any>>
}
