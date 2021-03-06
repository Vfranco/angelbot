import { HttpErrorResponse, HttpResponse, HttpStatusCode } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { userChangePasswordSuccess, userCreatedUser, userEdit, userWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadUsers } from "@core/constants/table.headers";
import { ChangePasswordField, UsersField } from "@core/constants/users.field";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { RequestBodyDto } from "@domain/http/request.body.dto";
import { IResponseBodyDto } from "@domain/http/response.body.dto";
import { UserDto } from "@domain/users/user.dto";
import { IUserRepository } from "@domain/users/user.repository";
import { ModalComponent } from "@shared/customs/modal/modal.component";
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'ui-users',
  templateUrl: './users.component.html'
})
export class UserComponent implements OnInit {

  @ViewChild('modalChageUserPassword') modalChangePassword: ModalComponent;
  @ViewChild('modalCreateAndEditUsers') modalCreateAndEditUsers: ModalComponent;

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
    @Inject(RepositoryProvider.usersRepository) private userService: IUserRepository,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fetchUserData();
    this.initializeFormCreateUser();
    this.initializeFormChangePasswordUser();
  }

  fetchUserData(): void {
    this.userService.readAll(this.userRequest).subscribe(
      (response: HttpResponse<IResponseBodyDto>) => this.userData = response.body.list
    );
  }

  initializeFormCreateUser(): void {
    this.formCreateUserData = this.formBuilder.group(UsersField);
  }

  initializeFormChangePasswordUser(): void {
    this.formChangeUserPassword = this.formBuilder.group(ChangePasswordField);
  }

  createUserData(): void {
    this.userService.createUser(this.formCreateUserData.value).subscribe((response: HttpResponse<any>) => {
      if (response.status === HttpStatusCode.Created) {
        this.modalCreateAndEditUsers.closeModal();
        swal.fire(userCreatedUser);
        this.fetchUserData();
      }
    }, (error: HttpErrorResponse) => {
      this.userErrorService = error;
      this.showErrorUserService = !error.ok;
    });
  }

  editUserData(): void {
    this.formCreateUserData.get('statusId').setValue(RequestAction.update);
    this.userService.updateUser(this.formCreateUserData.value).subscribe((response: HttpResponse<any>) => {
      if (response.status === HttpStatusCode.NoContent) {
        this.modalCreateAndEditUsers.closeModal();
        swal.fire(userEdit);
        this.fetchUserData();
      }
    }, (error: HttpErrorResponse) => {
      this.userErrorService = error;
      this.showErrorUserService = !error.ok;
    });
  }

  showModalWithUserData(user: UserDto): void {
    this.showErrorUserService = false;
    this.isEditUser = true;
    this.userService.getUserById(user.id).subscribe((response: HttpResponse<UserDto>) =>
      this.formCreateUserData.patchValue(response.body)
    );
  }

  deleteUserData(user: UserDto): void {
    swal.fire(userWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed)
        this.userService.deleteUser(user.id, RequestAction.delete).subscribe((response: HttpResponse<any>) => {
          if (response.status === HttpStatusCode.Ok)
            this.fetchUserData();
        });
    });
  }

  setUserData(user: UserDto): void {
    this.userDtoData = user;
    this.formChangeUserPassword.patchValue(user);
  }

  changeUserPassword(): void {
    this.userService.changePassword(this.userDtoData.id, this.formChangeUserPassword.value).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent) {
        this.modalChangePassword.closeModal();
        swal.fire(userChangePasswordSuccess);
        this.formChangeUserPassword.reset();
      }
    });
  }

  showFormToCreate(): void {
    this.formCreateUserData.reset();
    this.showErrorUserService = false;
    this.isEditUser = false;
  }
}
