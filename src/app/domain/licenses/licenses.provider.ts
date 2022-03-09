import { Provider } from "@angular/core";
import { LicensesService } from "@core/services/licenses.service";

export const LicensesProvider: Provider = {
    provide: 'LicensesRepository',
    useClass: LicensesService
}