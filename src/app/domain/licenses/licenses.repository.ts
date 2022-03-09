import { HttpResponse } from "@angular/common/http";
import { CreateLicense, GetLicense, UpdateLicense } from "@domain/licenses/licenses.dto";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { IResponseBodyDto } from "@domain/http/response.body.dto";
import { Observable } from "rxjs";

export interface ILicensesRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBodyDto>>
  createLicense(payload: CreateLicense): Observable<HttpResponse<any>>
  updateLicense(payload: UpdateLicense): Observable<HttpResponse<any>>
  getLicenseById(id: number): Observable<HttpResponse<GetLicense>>
  deleteLicense(id: number, status: number): Observable<HttpResponse<any>>
}
