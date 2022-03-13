import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateLicense, GetLicense, UpdateLicense } from "@domain/licenses/licenses.dto";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { IResponseBodyDto } from "@domain/http/response.body.dto";
import { ILicensesRepository } from "@domain/licenses/licenses.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class LicensesService implements ILicensesRepository {

  constructor(private http: HttpClient) { }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBodyDto>> {
    return this.http.post<IResponseBodyDto>(`${environment.baseUrl}/api/Licenses/All`, payload, { observe: 'response' });
  }

  createLicense(payload: CreateLicense): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Licenses`, payload, { observe: 'response' });
  }

  getLicenseById(id: number): Observable<HttpResponse<GetLicense>> {
    return this.http.get<GetLicense>(`${environment.baseUrl}/api/Licenses/${id}`, { observe: 'response' });
  }

  updateLicense(payload: UpdateLicense): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Licenses/${payload.id}`, payload, { observe: 'response' });
  }

  deleteLicense(id: number, status: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/Licenses/${id}`, { observe: 'response' });
  }
}
