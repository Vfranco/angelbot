import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { AdminRoute } from "./ui.routing";
import { HomeComponent } from './home/home.component';
import { DashboardComponentsModule } from "./home/components/components.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardComponentsModule,
    RouterModule.forChild(AdminRoute)
  ]
})
export class UiModule { }
