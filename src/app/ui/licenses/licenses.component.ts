import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { licensesField } from "@core/constants/licenses.field";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { licenseCreated, licenseDeleted, licenseUpdated, licenseWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadLicenses } from "@core/constants/table.headers";
import { DeleteLicense, GetLicense } from "@domain/licenses/licenses.dto";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { RequestBodyDto } from "@domain/http/request.body.dto";
import { ILicensesRepository } from "@domain/licenses/licenses.repository";
import { ModalComponent } from "@shared/customs/modal/modal.component";
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'licenses-component',
  templateUrl: './licenses.component.html',
})
export class LicensesComponent implements OnInit {
  @ViewChild('modalCreateAndEditLicense') modalLicense: ModalComponent;

  dataTableHead: string[] = dataTableHeadLicenses;
  formLicense: FormGroup;
  requestBody: IFilterRequestBody = new RequestBodyDto();
  licenseData: GetLicense[];
  isEditLicense: boolean = false;
  licenseErrorService: HttpErrorResponse;
  showErrorLicenseService: boolean;

  constructor(
    @Inject(RepositoryProvider.licensesRepository)
    private licenseService: ILicensesRepository,
    private formBuilder: FormBuilder
  ) {}

  get checkEmail(): AbstractControl {
    return this.formLicense.get('email');
  }

  ngOnInit(): void {
    this.initializeLicenseForm();
    this.fetchData();
  }

  initializeLicenseForm(): void {
    this.formLicense = this.formBuilder.group(licensesField);
  }

  fetchData(): void {
    this.licenseService
      .readAll(this.requestBody)
      .subscribe((response) => (this.licenseData = response.body.list));
  }

  createLicense(): void {
    this.licenseService.createLicense(this.formLicense.value).subscribe(
      (response) => {
        if (response.status === HttpStatusCode.Created) {
          this.modalLicense.closeModal();
          swal.fire(licenseCreated);
          this.fetchData();
        }
      },
      (error: HttpErrorResponse) => {
        this.licenseErrorService = error;
        this.showErrorLicenseService = !error.ok;
      }
    );
  }

  editLicense(): void {
    this.formLicense.get('statusId').setValue(RequestAction.update);
    this.licenseService.updateLicense(this.formLicense.value).subscribe(
      (response) => {
        if (response.status === HttpStatusCode.NoContent) {
          this.modalLicense.closeModal();
          swal.fire(licenseUpdated);
          this.fetchData();
        }
      },
      (error: HttpErrorResponse) => {
        this.licenseErrorService = error;
        this.showErrorLicenseService = !error.ok;
      }
    );
  }

  showModalWithLicenseData(license: GetLicense): void {
    this.showErrorLicenseService = false;
    this.isEditLicense = true;
    this.licenseService
      .getLicenseById(license.id)
      .subscribe((response) => this.formLicense.patchValue(response.body));
  }

  deleteLicense(license: DeleteLicense): void {
    swal.fire(licenseWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.licenseService
          .deleteLicense(license.id, RequestAction.delete)
          .subscribe((response) => {
            if (response.status === HttpStatusCode.Ok) {
              swal.fire(licenseDeleted);
              this.fetchData();
            }
          });
      }
    });
  }

  showFormToCreate(): void {
    this.formLicense.reset();
    this.showErrorLicenseService = false;
    this.isEditLicense = false;
  }
}
