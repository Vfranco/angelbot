import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserProvider } from "@domain/users/user.provider";
import { DataTableModule } from "@shared/customs/data-table/datatable.module";
import { SharedModule } from "@shared/shared.module";
import { UserComponent } from './view/users.component';
import { usersRoute } from './users.routing';
import { UsersInteractor } from "./interactor/users.interactor";
import { UsersPProvider } from '@domain/users/userProvider.provider';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    RouterModule.forChild(usersRoute)
  ],
  providers: [UserProvider, UsersPProvider, UsersInteractor]
})
export class UsersModule { }
