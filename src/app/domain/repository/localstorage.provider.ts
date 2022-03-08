import { Provider } from "@angular/core";
import { LocalStorageService } from '@core/services/localstorage.service';

export const localstorageProvider: Provider = {
  provide: 'localstorageRepository',
  useClass: LocalStorageService
}
