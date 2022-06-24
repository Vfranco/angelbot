import { CompaniesDto } from "@domain/companies/companie.dto";

export interface ICompaniesInteractorOutput {
  companyList(records: CompaniesDto[], pages: number, rows: number): void;
}
