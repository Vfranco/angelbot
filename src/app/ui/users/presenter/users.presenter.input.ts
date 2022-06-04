import { CorePresenter } from "@core/view/core.view";
import { UserDto } from "@domain/users/user.dto";

export interface IUsersPresenterInput extends CorePresenter {
  fetchUserData(): void;
  createUserData(): void;
  editUserData(): void;
  showModalWithUserData(user: UserDto): void;
  deleteUserData(user: UserDto): void;
  setUserData(user: UserDto): void;
  changeUserPassword(): void;
  showFormToCreate(): void
}
