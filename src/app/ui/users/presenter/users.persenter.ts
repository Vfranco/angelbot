import { IUsersInteractorInput } from '../interactor/users.interactor.input';
import { IUsersInteractorOuput } from '../interactor/users.interactor.output';
import { IUsersPresenterOutput } from './users.presenter.output';
import { UsersInteractor } from '../interactor/users.interactor';
import { IUsersPresenterInput } from './users.presenter.input';
import { UserDto } from '@domain/users/user.dto';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFilterRequestBody } from '@domain/http/filter.request.body.interface';

@Injectable()
export class UsersPresenter implements IUsersPresenterInput, IUsersInteractorOuput {
  private _view: IUsersPresenterOutput;

  constructor(private _interactor: UsersInteractor) {
    this._interactor.setPresenter(this);
  }

  public setView(component: IUsersPresenterOutput): void {
    this._view = component;
    this._interactor.setView(component);
  }

  fetchUserData(userRequest: IFilterRequestBody): void {
    this._interactor.fetchUserData(userRequest);
  }

  createUserData(formUser:FormGroup): void {
    this._interactor.createUserData(formUser);
  }

  editUserData(formUser:FormGroup): void {
    this._interactor.editUserData(formUser);
  }

  showModalWithUserData(user: UserDto): void {
    this._interactor.showModalWithUserData(user);
  }

  deleteUserData(user: UserDto): void {
    this._interactor.deleteUserData(user);
  }

  setUserData(user: UserDto): void {
    this._interactor.setUserData(user);
  }

  changeUserPassword(formChangePassword:FormGroup): void {
    this._interactor.changeUserPassword(formChangePassword);
  }

  showFormToCreate(): void {
    this._interactor.showFormToCreate();
  }
}
