import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { licenseCreated, licenseDeleted, licenseUpdated, licenseWarning } from "@core/constants/sweetalert.config";
import { DeleteLicense, GetLicense } from "@domain/licenses/licenses.dto";
import { ILicensesRepository } from "@domain/licenses/licenses.repository";
import Swal, { SweetAlertResult } from "sweetalert2";
import { ILicensesPresenterInput } from "../presenter/licenses.presenter.input";
import { ILicensesPresenterOutput } from '../presenter/licenses.presenter.output';
import { ILicensesInteractorOutput } from './licenses.interactor.output';
import swal from 'sweetalert2';
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { FormGroup } from "@angular/forms";
import { IResponseBodyDto } from "@domain/http/response.body.dto";


@Injectable()
export class LicensesInteractor implements ILicensesPresenterInput {
  private _presenter: ILicensesInteractorOutput;
  private _view: ILicensesPresenterOutput;

  constructor(@Inject(RepositoryProvider.licensesRepository) private licenseService: ILicensesRepository) { }

  setPresenter(presenter: ILicensesInteractorOutput): void {
    this._presenter = presenter;
  }

  setView(view: ILicensesPresenterOutput): void {
    this._view = view;
  }

  fetchData(requestBody: IFilterRequestBody): void {
    this.licenseService.readAll(requestBody).subscribe(
      (response: HttpResponse<IResponseBodyDto>) => (this._view.licenseData = response.body.list)
    );
  }

  createLicense(formLicense: FormGroup): void {
    this.licenseService.createLicense(formLicense.value).subscribe(
      (response) => {
        if (response.status === HttpStatusCode.Created) {
          this._view.modalLicense.closeModal();
          Swal.fire(licenseCreated);
          this._view.fetchData();
        }
      },
      (error: HttpErrorResponse) => {
        this._view.licenseErrorService = error;
        this._view.showErrorLicenseService = !error.ok;
      }
    );
  }

  editLicense(formLicense: FormGroup): void {
    this._view.formLicense.get('statusId').setValue(RequestAction.update);
    this.licenseService.updateLicense(formLicense.value).subscribe(
      (response) => {
        if (response.status === HttpStatusCode.NoContent) {
          this._view.modalLicense.closeModal();
          Swal.fire(licenseUpdated);
          this._view.fetchData();
        }
      },
      (error: HttpErrorResponse) => {
        this._view.licenseErrorService = error;
        this._view.showErrorLicenseService = !error.ok;
      }
    );
  }

  showModalWithLicenseData(license: GetLicense): void {
    this._view.showErrorLicenseService = false;
    this._view.isEditLicense = true;
    this._view.comboboxComponent.setDisabledState(true);
    this.licenseService
      .getLicenseById(license.id)
      .subscribe((response) => this._view.formLicense.patchValue(response.body));
  }

  deleteLicense(license: DeleteLicense): void {
    swal.fire(licenseWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.licenseService
          .deleteLicense(license.id, RequestAction.delete)
          .subscribe((response) => {
            if (response.status === HttpStatusCode.Ok) {
              swal.fire(licenseDeleted);
              this._view.fetchData();
            }
          });
      }
    });
  }

  showFormToCreate(): void {
    this._view.formLicense.reset();
    this._view.showErrorLicenseService = false;
    this._view.isEditLicense = false;
    this._view.comboboxComponent.setDisabledState(false);
  }
}
