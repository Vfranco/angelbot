import { ILicensesPresenterInput } from './licenses.presenter.input';
import { ICompaniesInteractorOutput } from '../../companies/interactor/companies.interactor.output';
import { LicensesInteractor } from '../interactor/licenses.interactor';
import { ILicensesPresenterOutput } from './licenses.presenter.output';
import { DeleteLicense, GetLicense } from '@domain/licenses/licenses.dto';
import { Injectable } from '@angular/core';
import { IFilterRequestBody } from '@domain/http/filter.request.body.interface';
import { FormGroup } from '@angular/forms';

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

  fetchData(requestBody: IFilterRequestBody): void {
    this._interactor.fetchData(requestBody);
  }

  createLicense(formLicense: FormGroup): void {
    this._interactor.createLicense(formLicense);
  }

  editLicense(formLicense: FormGroup): void {
    this._interactor.editLicense(formLicense);
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
