import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CompanieProvider } from "@domain/companies/companie.provider";
import { DataTableModule } from "@shared/customs/data-table/datatable.module";
import { SharedModule } from "@shared/shared.module";
import { CompaniesPageComponent } from './view/companies.component';
import { empresasRoute } from "./companies.routing";
import { CompaniesPProvider } from "@domain/companies/companieProvider.provider";
import { CompaniesInteractor } from "./interactor/companies.interactor";

@NgModule({
  declarations: [
    CompaniesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    RouterModule.forChild(empresasRoute)
  ],
  providers: [CompanieProvider, CompaniesPProvider, CompaniesInteractor]
})
export class EmpresasModule { }
