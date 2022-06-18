import { FormGroup } from "@angular/forms";
import { CorePresenter } from "@core/view/core.view";
import { IFilterRequestBody } from "@domain/http/filter.request.body.interface";
import { UserDto } from "@domain/users/user.dto";

export interface IUsersPresenterInput extends CorePresenter {
  fetchUserData(userRequest: IFilterRequestBody): void;
  createUserData(formUser:FormGroup): void;
  editUserData(formUser:FormGroup): void;
  showModalWithUserData(user: UserDto): void;
  deleteUserData(user: UserDto): void;
  setUserData(user: UserDto): void;
  changeUserPassword(formChangePassword:FormGroup): void;
  showFormToCreate(): void
}
