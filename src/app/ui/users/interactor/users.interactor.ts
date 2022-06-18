import { Inject, Injectable } from "@angular/core";
import { IUsersPresenterInput } from '../presenter/users.presenter.input';
import { IUsersInteractorOuput } from './users.interactor.output';
import { IUsersPresenterOutput } from '../presenter/users.presenter.output';
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { IUserRepository } from "@domain/users/user.repository";
import { HttpErrorResponse, HttpResponse, HttpStatusCode } from "@angular/common/http";
import { IResponseBodyDto } from "@domain/http/response.body.dto";
import Swal, { SweetAlertResult } from "sweetalert2";
import { userChangePasswordSuccess, userCreatedUser, userEdit, userWarning } from "@core/constants/sweetalert.config";
import { RequestAction } from "@core/constants/requestactions.enum";
import swal from 'sweetalert2';
import { UserDto } from "@domain/users/user.dto";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { RequestBodyDto } from "@domain/http/request.body.dto";
import { FormGroup } from "@angular/forms";

@Injectable()
export class UsersInteractor implements IUsersPresenterInput {
  private _presenter: IUsersInteractorOuput;
  private _view: IUsersPresenterOutput;

  constructor(@Inject(RepositoryProvider.usersRepository) private userService: IUserRepository) { }

  setPresenter(presenter: IUsersInteractorOuput): void {
    this._presenter = presenter;
  }

  setView(view: IUsersPresenterOutput): void {
    this._view = view;
  }

  fetchUserData(userRequest: IFilterRequestBody): void {
    this.userService.readAll(userRequest).subscribe(
      (response: HttpResponse<IResponseBodyDto>) => this._view.userData = response.body.list
    );
  }

  createUserData(formUser:FormGroup): void {
    this.userService.createUser(formUser.value).subscribe((response: HttpResponse<any>) => {
      if (response.status === HttpStatusCode.Created) {
        this._view.modalCreateAndEditUsers.closeModal();
        Swal.fire(userCreatedUser);
        this._view.fetchUserData();
      }
    }, (error: HttpErrorResponse) => {
      this._view.userErrorService = error;
      this._view.showErrorUserService = !error.ok;
    });
  }

  editUserData(formUser:FormGroup): void {
    formUser.get('statusId').setValue(RequestAction.update);
    this.userService.updateUser(formUser.value).subscribe((response: HttpResponse<any>) => {
      if (response.status === HttpStatusCode.NoContent) {
        this._view.modalCreateAndEditUsers.closeModal();
        swal.fire(userEdit);
        this._view.fetchUserData();
      }
    }, (error: HttpErrorResponse) => {
      this._view.userErrorService = error;
      this._view.showErrorUserService = !error.ok;
    });
  }

  showModalWithUserData(user: UserDto): void {
    this._view.showErrorUserService = false;
    this._view.isEditUser = true;
    this.userService.getUserById(user.id).subscribe((response: HttpResponse<UserDto>) =>
      this._view.formCreateUserData.patchValue(response.body)
    );
  }

  deleteUserData(user: UserDto): void {
    swal.fire(userWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed)
        this.userService.deleteUser(user.id, RequestAction.delete).subscribe((response: HttpResponse<any>) => {
          if (response.status === HttpStatusCode.Ok)
            this._view.fetchUserData();
        });
    });
  }

  setUserData(user: UserDto): void {
    this._view.userDtoData = user;
    this._view.formChangeUserPassword.patchValue(user);
  }

  changeUserPassword(formChangePassword:FormGroup): void {
    this.userService.changePassword(this._view.userDtoData.id, formChangePassword.value).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent) {
        this._view.modalChangePassword.closeModal();
        swal.fire(userChangePasswordSuccess);
        this._view.formChangeUserPassword.reset();
      }
    });
  }

  showFormToCreate(): void {
    this._view.formCreateUserData.reset();
    this._view.showErrorUserService = false;
    this._view.isEditUser = false;
  }
}
