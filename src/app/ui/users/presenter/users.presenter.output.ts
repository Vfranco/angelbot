import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup} from '@angular/forms';
import { IModalComponent } from '@domain/companies/IModalComponent';
import { IFilterRequestBody } from '@domain/http/filter.request.body.interface';
import { UserDto } from '@domain/users/user.dto';

export interface IUsersPresenterOutput{
  dataTableHead: string[];
  userData: UserDto[];
  userRequest: IFilterRequestBody;
  formCreateUserData: FormGroup;
  formChangeUserPassword: FormGroup;
  isEditUser: boolean;
  userErrorService: HttpErrorResponse;
  showErrorUserService: boolean;
  userDtoData: UserDto;
  modalChangePassword: IModalComponent;
  modalCreateAndEditUsers: IModalComponent;
  fetchUserData(): void;
}
