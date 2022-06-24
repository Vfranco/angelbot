import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CompaniesDto, DeleteCompanie, GetCompanie } from "@domain/companies/companie.dto";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { CompaniesInteractor } from "../interactor/companies.interactor";
import { ICompaniesInteractorOutput } from "../interactor/companies.interactor.output";
import { ICompaniesPresenterInput } from './companies.presenter.input';
import { ICompaniesPresenterOutput } from './companies.presenter.output';

@Injectable()
export class companiesPresenter
  implements ICompaniesPresenterInput, ICompaniesInteractorOutput
{
  private _view: ICompaniesPresenterOutput;

  constructor(private _interactor: CompaniesInteractor) {
    this._interactor.setPresenter(this);
  }

  public setView(component: ICompaniesPresenterOutput): void {
    this._view = component;
    this._interactor.setView(component);
  }

  fetchData(requestBody: IFilterRequestBody): void {
    this._interactor.fetchData(requestBody);
  }

  createCompanie(formCompanie: FormGroup): void {
    this._interactor.createCompanie(formCompanie);
  }

  editCompanie(formCompanie: FormGroup): void {
    this._interactor.editCompanie(formCompanie);
  }

  showModalWithCompanieData(companie: GetCompanie): void {
    this._interactor.showModalWithCompanieData(companie);
  }

  deleteCompanie(companie: DeleteCompanie): void {
    this._interactor.deleteCompanie(companie);
  }

  showFormToCreate(): void {
    this._interactor.showFormToCreate();
  }

  companyList(records: CompaniesDto[], pages: number, rows: number): void {
    this._view.showCompanieRecords(records, pages, rows);
  }
}
