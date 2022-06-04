import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LicensesProvider } from "@domain/licenses/licenses.provider";
import { DataTableModule } from "@shared/customs/data-table/datatable.module";
import { SharedModule } from "@shared/shared.module";
import { licensesRoute } from "./licenses.routing";
import { LicensesComponent } from "./view/licenses.component";
import { LicensesPProvider } from '../../domain/licenses/licensesProvider.provider';
import { LicensesInteractor } from './interactor/licenses.interactor';

@NgModule({
  declarations: [LicensesComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    RouterModule.forChild(licensesRoute),
  ],
  providers: [LicensesProvider, LicensesPProvider, LicensesInteractor],
})
export class LicensesModule {}
