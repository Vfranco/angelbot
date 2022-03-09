import { Provider } from "@angular/core";
import { CompaniesService } from "@core/services/companies.service";

export const CompanieProvider: Provider = {
    provide: 'CompanieRepository',
    useClass: CompaniesService
}