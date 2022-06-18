import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { CompaniesField } from "@core/constants/companies.field";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { dataTableHeadCompanies } from "@core/constants/table.headers";
import { DeleteCompanie, GetCompanie } from "@domain/companies/companie.dto";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { RequestBodyDto } from "@domain/http/request.body.dto";
import { ICompaniesPresenterInput } from '../presenter/companies.presenter.input';
import { ICompaniesPresenterOutput } from '../presenter/companies.presenter.output';

@Component({
  selector: 'empresas-component',
  templateUrl: './companies.component.html',
})
export class CompaniesPageComponent implements OnInit, ICompaniesPresenterOutput {

  @ViewChild('modalCreateAndEditCompanie') modalCompanie: IModalComponent;

  dataTableHead: string[] = dataTableHeadCompanies;
  formCompanie: FormGroup;
  requestBody: IFilterRequestBody = new RequestBodyDto;
  companieData: GetCompanie[];
  isEditCompanie: boolean = false;
  companieErrorService: HttpErrorResponse;
  showErrorCompanieService: boolean;

  constructor(
    @Inject(RepositoryProvider.companiesPresenterProvider) private _presenter: ICompaniesPresenterInput,
    private formBuilder: FormBuilder
  ) { this._presenter.setView(this) }

  get checkEmail(): AbstractControl {
    return this.formCompanie.get('email');
  }

  ngOnInit(): void {
    this.initializeCompanieForm();
    this.fetchData();
  }

  initializeCompanieForm(): void {
    this.formCompanie = this.formBuilder.group(CompaniesField);
  }

  fetchData(): void {
    this._presenter.fetchData(this.requestBody);
  }

  createCompanie(): void {
    this._presenter.createCompanie(this.formCompanie);
  }

  editCompanie(): void {
    this._presenter.editCompanie(this.formCompanie);
  }

  showModalWithCompanieData(companie: GetCompanie): void {
    this._presenter.showModalWithCompanieData(companie);
  }

  deleteCompanie(companie: DeleteCompanie): void {
    this._presenter.deleteCompanie(companie);
  }

  showFormToCreate(): void {
    this._presenter.showFormToCreate();
  }
}