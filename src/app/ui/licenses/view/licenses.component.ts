import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { licensesField } from "@core/constants/licenses.field";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { dataTableHeadLicenses } from "@core/constants/table.headers";
import { DeleteLicense, GetLicense } from "@domain/licenses/licenses.dto";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { RequestBodyDto } from "@domain/http/request.body.dto";
import { ComboBoxComponent } from "@shared/customs/combobox/combobox.component";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { IModalComboBox } from "@shared/customs/combobox/IComboboxComponent";
import { ILicensesPresenterInput } from '../presenter/licenses.presenter.input';
import { ILicensesPresenterOutput } from '../presenter/licenses.presenter.output';

@Component({
  selector: 'licenses-component',
  templateUrl: './licenses.component.html',
})
export class LicensesComponent implements OnInit, ILicensesPresenterOutput {

  @ViewChild('modalCreateAndEditLicense') modalLicense: IModalComponent;
  @ViewChild(ComboBoxComponent) comboboxComponent: IModalComboBox;

  dataTableHead: string[] = dataTableHeadLicenses;
  formLicense: FormGroup;
  requestBody: IFilterRequestBody = new RequestBodyDto();
  licenseData: GetLicense[];
  isEditLicense: boolean = false;
  licenseErrorService: HttpErrorResponse;
  showErrorLicenseService: boolean;

  constructor(
    @Inject(RepositoryProvider.licensesPresenterProvider) private _Presenter: ILicensesPresenterInput,
    private formBuilder: FormBuilder
  ) { this._Presenter.setView(this) }

  ngOnInit(): void {
    this.initializeLicenseForm();
    this.fetchData();
  }

  initializeLicenseForm(): void {
    this.formLicense = this.formBuilder.group(licensesField);
  }

  fetchData(): void {
    this._Presenter.fetchData(this.requestBody);
  }

  createLicense(): void {
    this._Presenter.createLicense(this.formLicense);
  }

  editLicense(): void {
    this._Presenter.editLicense(this.formLicense);
  }

  showModalWithLicenseData(license: GetLicense): void {
    this._Presenter.showModalWithLicenseData(license);
  }

  deleteLicense(license: DeleteLicense): void {
    this._Presenter.deleteLicense(license);
  }

  showFormToCreate(): void {
    this._Presenter.showFormToCreate();
  }
}
