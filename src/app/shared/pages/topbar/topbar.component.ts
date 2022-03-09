import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from '@core/constants/navigataion.enum';
import { ILocalStorageRepository } from '@domain/repository/localstorage.repository';
import { UserDto } from '@domain/users/user.dto';

@Component({
  selector: 'topbar-component',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  userSession: UserDto;

  constructor(@Inject('localstorageRepository') private localstorageService: ILocalStorageRepository, private router: Router) { }

  ngOnInit(): void {

  }

  recoverySessionFromLocalStorage(): void {
    this.userSession = this.localstorageService.getItem(Navigation.userSession);
  }

  logoutSession(): void {
    this.localstorageService.removeItem();
    this.router.navigate([Navigation.login]);
  }
}
