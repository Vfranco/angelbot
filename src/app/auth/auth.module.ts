import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthProvider } from "@domain/auth/auth.provider";
import { authRoute } from "./auth.routing";
import { AuthLoginComponent } from "./login/login.component";
import { localstorageProvider } from '../domain/repository/localstorage.provider';

@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoute)
  ],
  providers: [AuthProvider, localstorageProvider]
})
export class AuthModule { }
