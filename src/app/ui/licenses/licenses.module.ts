import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTableModule } from "@shared/customs/data-table/datatable.module";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule
  ]
})
export class LicensesModule { }
