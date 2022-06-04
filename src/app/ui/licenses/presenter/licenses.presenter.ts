import { ILicensesPresenterInput } from './licenses.presenter.input';
import { ICompaniesInteractorOutput } from '../../companies/interactor/companies.interactor.output';
import { LicensesInteractor } from '../interactor/licenses.interactor';
import { ILicensesPresenterOutput } from './licenses.presenter.output';
import { DeleteLicense, GetLicense } from '@domain/licenses/licenses.dto';
import { Injectable } from '@angular/core';

@Injectable()
export class LicensesPresenter implements ILicensesPresenterInput, ICompaniesInteractorOutput {
  private _view: ILicensesPresenterOutput;

  constructor(private _interactor: LicensesInteractor) {
    this._interactor.setPresenter(this);
  }

  public setView(component: ILicensesPresenterOutput): void {
    this._view = component;
    this._interactor.setView(component);
  }

  fetchData(): void {
    this._interactor.fetchData();
  }

  createLicense(): void {
    this._interactor.createLicense();
  }

  editLicense(): void {
    this._interactor.editLicense();
  }

  showModalWithLicenseData(license: GetLicense): void {
    this._interactor.showModalWithLicenseData(license);
  }

  deleteLicense(license: DeleteLicense): void {
    this._interactor.deleteLicense(license);
  }

  showFormToCreate(): void {
    this._interactor.showFormToCreate();
  }
}
