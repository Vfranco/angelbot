import { IUsersInteractorInput } from '../interactor/users.interactor.input';
import { IUsersInteractorOuput } from '../interactor/users.interactor.output';
import { IUsersPresenterOutput } from './users.presenter.output';
import { UsersInteractor } from '../interactor/users.interactor';
import { IUsersPresenterInput } from './users.presenter.input';
import { UserDto } from '@domain/users/user.dto';
import { Injectable } from '@angular/core';

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

  fetchUserData(): void {
    this._interactor.fetchUserData();
  }

  createUserData(): void {
    this._interactor.createUserData();
  }

  editUserData(): void {
    this._interactor.editUserData();
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

  changeUserPassword(): void {
    this._interactor.changeUserPassword();
  }

  showFormToCreate(): void {
    this._interactor.showFormToCreate();
  }
}
