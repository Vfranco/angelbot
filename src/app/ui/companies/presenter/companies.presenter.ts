import { Injectable } from "@angular/core";
import { DeleteCompanie, GetCompanie } from "@domain/companies/companie.dto";
import { CompaniesInteractor } from "../interactor/companies.interactor";
import { ICompaniesInteractorOutput } from "../interactor/companies.interactor.output";
import { ICompaniesPresenterInput } from './companies.presenter.input';
import { ICompaniesPresenterOutput } from './companies.presenter.output';

@Injectable()
export class companiesPresenter implements ICompaniesPresenterInput, ICompaniesInteractorOutput {
  private _view: ICompaniesPresenterOutput;

  constructor(private _interactor: CompaniesInteractor) {
    this._interactor.setPresenter(this);
  }

  public setView(component: ICompaniesPresenterOutput): void {
    this._view = component;
    this._interactor.setView(component);
  }

  fetchData(): void {
    this._interactor.fetchData();
  }

  createCompanie(): void {
    this._interactor.createCompanie();
  }

  editCompanie(): void {
    this._interactor.editCompanie();
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
}
