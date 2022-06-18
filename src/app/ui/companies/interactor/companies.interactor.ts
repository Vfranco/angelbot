import { Inject, Injectable } from "@angular/core";
import swal, { SweetAlertResult } from 'sweetalert2';
import { DeleteCompanie, GetCompanie } from "@domain/companies/companie.dto";
import { ICompaniesPresenterInput } from '../presenter/companies.presenter.input';
import { companieCreated, companieDeleted, companieUpdated, companieWarning } from "@core/constants/sweetalert.config";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { ICompaniesRepository } from "@domain/companies/companie.repository";
import { RequestAction } from "@core/constants/requestactions.enum";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { ICompaniesPresenterOutput } from '../presenter/companies.presenter.output';
import { ICompaniesInteractorOutput } from './companies.interactor.output';
import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";

@Injectable()
export class CompaniesInteractor implements ICompaniesPresenterInput {
  private _presenter: ICompaniesInteractorOutput;
  private _view: ICompaniesPresenterOutput;

  constructor(@Inject(RepositoryProvider.companieRepository) private companieService: ICompaniesRepository) { }

  setPresenter(presenter: ICompaniesInteractorOutput): void {
    this._presenter = presenter;
  }

  setView(view: ICompaniesPresenterOutput): void {
    this._view = view;
  }

  fetchData(requestBody: IFilterRequestBody): void {
    this.companieService.readAll(requestBody).subscribe(response => this._view.companieData = response.body.list);
  }

  createCompanie(formCompanie:FormGroup): void {
    this.companieService.createCompanie(formCompanie.value).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this._view.modalCompanie.closeModal();
        swal.fire(companieCreated);
        this._view.fetchData();
      }
    }, (error: HttpErrorResponse) => {
      this._view.companieErrorService = error;
      this._view.showErrorCompanieService = !error.ok;
    });
  }

  editCompanie(formCompanie:FormGroup): void {
    formCompanie.get('statusId').setValue(RequestAction.update);
    this.companieService.updateCompanie(formCompanie.value).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent) {
        this._view.modalCompanie.closeModal();
        swal.fire(companieUpdated);
        this._view.fetchData();
      }
    }, (error: HttpErrorResponse) => {
      this._view.companieErrorService = error;
      this._view.showErrorCompanieService = !error.ok;
    })
  }

  deleteCompanie(companie: DeleteCompanie): void {
    swal.fire(companieWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.companieService.deleteCompanie(companie.id, RequestAction.delete).subscribe(response => {
          if (response.status === HttpStatusCode.Ok) {
            swal.fire(companieDeleted);
            this._view.fetchData();
          }
        });
      }
    });
  }

  showModalWithCompanieData(companie: GetCompanie): void {
    this._view.showErrorCompanieService = false;
    this._view.isEditCompanie = true;
    this.companieService.getCompanieById(companie.id).subscribe(
      response => this._view.formCompanie.patchValue(response.body)
    );
  }

  showFormToCreate(): void {
    this._view.formCompanie.reset();
    this._view.showErrorCompanieService = false;
    this._view.isEditCompanie = false;
  }
}
