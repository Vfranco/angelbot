import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IFilterRequestBody } from "@domain/dto/request.body.dto";
import { IUserRepository } from '../../domain/users/user.repository';
import { Observable } from 'rxjs';
import { IResponseBody } from "@domain/dto/response.body.dto";
import { environment } from "@environment/environment";
import { IUsersField } from "@core/validators/usersform.validator";
import { ChangePassword, UserDto } from "@domain/dto/user.dto";

@Injectable()
export class UsersServices implements IUserRepository {

  constructor(private http: HttpClient) { }

  deleteUser(id: number, status: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/Users/${id}`, { observe: 'response' });
  }

  getUserById(id: number): Observable<HttpResponse<UserDto>> {
    return this.http.get<UserDto>(`${environment.baseUrl}/api/Users/${id}`, { observe: 'response' });
  }

  updateUser(payload: IUsersField): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Users/${payload.id}`, payload, { observe: 'response' });
  }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>> {
    return this.http.post<IResponseBody>(`${environment.baseUrl}/api/Users/All`, payload, { observe: 'response' });
  }

  createUser(payload: IUsersField): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Users`, payload, { observe: 'response' });
  }

  changePassword(id: number, payload: ChangePassword): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Users/ChangePassword/${id}`, payload, { observe: 'response' });
  }
}
