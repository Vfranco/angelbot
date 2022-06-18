import { HttpErrorResponse, HttpResponse, HttpStatusCode } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { dataTableHeadUsers } from "@core/constants/table.headers";
import { ChangePasswordField, UsersField } from "@core/constants/users.field";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { RequestBodyDto } from "@domain/http/request.body.dto";
import { UserDto } from "@domain/users/user.dto";
import { IUsersPresenterInput } from "../presenter/users.presenter.input";

@Component({
  selector: 'ui-users',
  templateUrl: './users.component.html'
})
export class UserComponent implements OnInit {

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

  constructor(
    @Inject(RepositoryProvider.usersPresenterProvider) private _Presenter: IUsersPresenterInput,
    private formBuilder: FormBuilder
  ) { this._Presenter.setView(this) }

  ngOnInit(): void {
    this.fetchUserData();
    this.initializeFormCreateUser();
    this.initializeFormChangePasswordUser();
  }

  fetchUserData(): void {
    this._Presenter.fetchUserData(this.userRequest);
  }

  initializeFormCreateUser(): void {
    this.formCreateUserData = this.formBuilder.group(UsersField);
  }

  initializeFormChangePasswordUser(): void {
    this.formChangeUserPassword = this.formBuilder.group(ChangePasswordField);
  }

  createUserData(): void {
    this._Presenter.createUserData(this.formCreateUserData);
  }

  editUserData(): void {
    this._Presenter.editUserData(this.formCreateUserData);
  }

  showModalWithUserData(user: UserDto): void {
    this._Presenter.showModalWithUserData(user);
  }

  deleteUserData(user: UserDto): void {
    this._Presenter.deleteUserData(user);
  }

  setUserData(user: UserDto): void {
    this.userDtoData = user;
    this.formChangeUserPassword.patchValue(user);
  }

  changeUserPassword(): void {
    this._Presenter.changeUserPassword(this.formChangeUserPassword);
  }

  showFormToCreate(): void {
    this._Presenter.showFormToCreate();
  }
}