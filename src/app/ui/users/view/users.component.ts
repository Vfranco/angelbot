import { HttpErrorResponse, HttpResponse, HttpStatusCode } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { dataTableHeadUsers } from "@core/constants/table.headers";
import { ChangePasswordField, UsersField } from "@core/constants/users.field";
import { CoreDataTable } from "@core/view/core.datatable";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { RequestBodyDto } from "@domain/http/request.body.dto";
import { UserDto } from "@domain/users/user.dto";
import { IUsersPresenterInput } from "../presenter/users.presenter.input";
import { IUsersPresenterOutput } from "../presenter/users.presenter.output";

@Component({
  selector: 'ui-users',
  templateUrl: './users.component.html'
})
export class UserComponent implements OnInit, IUsersPresenterOutput, CoreDataTable {

  @ViewChild('modalChageUserPassword') modalChangePassword: IModalComponent;
  @ViewChild('modalCreateAndEditUsers') modalCreateAndEditUsers: IModalComponent;

  dataTableHead: string[] = dataTableHeadUsers;
  userData: UserDto[];
  userRequest: IFilterRequestBody = new RequestBodyDto;
  formCreateUserData: FormGroup;
  formChangeUserPassword: FormGroup;
  isEditUser: boolean = false;
  userErrorService: HttpErrorResponse;
  showErrorUserService: boolean;
  userDtoData: UserDto;
  isDescOrAsc: boolean = false;
  amountOfPages: number;
  amountOfRows: number;
  myResultValue: number;

  constructor(
    @Inject(RepositoryProvider.usersPresenterProvider) private _presenter: IUsersPresenterInput,
    private formBuilder: FormBuilder
  ) { this._presenter.setView(this) }

  ngOnInit(): void {
    this.fetchUserData();
    this.initializeFormCreateUser();
    this.initializeFormChangePasswordUser();
  }

  fetchUserData(): void {
    this._presenter.fetchUserData(this.userRequest);
  }

  initializeFormCreateUser(): void {
    this.formCreateUserData = this.formBuilder.group(UsersField);
  }

  initializeFormChangePasswordUser(): void {
    this.formChangeUserPassword = this.formBuilder.group(ChangePasswordField);
  }

  createUserData(): void {
    this._presenter.createUserData(this.formCreateUserData.value);
  }

  editUserData(): void {
    this._presenter.editUserData(this.formCreateUserData.value);
  }

  showModalWithUserData(user: UserDto): void {
    this._presenter.showModalWithUserData(user);
  }

  deleteUserData(user: UserDto): void {
    this._presenter.deleteUserData(user);
  }

  setUserData(user: UserDto): void {
    this.userDtoData = user;
    this.formChangeUserPassword.patchValue(user);
  }

  changeUserPassword(): void {
    this._presenter.changeUserPassword(this.formChangeUserPassword);
  }

  showFormToCreate(): void {
    this._presenter.showFormToCreate();
  }

  sortDatatable(fieldToSort: string): void {
    this.isDescOrAsc = !this.isDescOrAsc;
    this.userRequest.sortDatatable(fieldToSort, this.isDescOrAsc);
    this.fetchUserData();
  }

  applyFilter(filter: any): void {
    this.userRequest.applyFilter(filter);
    this.fetchUserData();
  }

  restoreFilter(page: number): void {
    this.userRequest.restoreFilter(page);
    this.fetchUserData();
  }

  selectedPage(page: number): void {
    this.userRequest.selectedPage(page);
    this.fetchUserData();
  }
}
