import { HttpResponse } from "@angular/common/http";
import { CreateCompanie, GetCompanie, UpdateCompanie } from "@domain/companies/companie.dto";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { IResponseBodyDto } from "@domain/http/response.body.dto";
import { Observable } from "rxjs";

export interface ICompaniesRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBodyDto>>
  createCompanie(payload: CreateCompanie): Observable<HttpResponse<any>>
  updateCompanie(payload: UpdateCompanie): Observable<HttpResponse<any>>
  getCompanieById(id: number): Observable<HttpResponse<GetCompanie>>
  deleteCompanie(id: number, status: number): Observable<HttpResponse<any>>
}
