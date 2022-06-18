import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { GetCompanie } from "@domain/companies/companie.dto";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";

export interface ICompaniesPresenterOutput {
  dataTableHead: string[];
  modalCompanie: IModalComponent;
  formCompanie: FormGroup;
  requestBody: IFilterRequestBody;
  companieData: GetCompanie[];
  isEditCompanie: boolean;
  companieErrorService: HttpErrorResponse;
  showErrorCompanieService: boolean;
  fetchData(): void;
}