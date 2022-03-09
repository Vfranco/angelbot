import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LicensesProvider } from "@domain/licenses/licenses.provider";
import { DataTableModule } from "@shared/customs/data-table/datatable.module";
import { SharedModule } from "@shared/shared.module";
import { LicensesComponent } from "./licenses.component";
import { licensesRoute } from "./licenses.routing";

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
  providers: [LicensesProvider],
})
export class LicensesModule {}
