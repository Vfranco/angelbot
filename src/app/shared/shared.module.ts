import { NgModule } from "@angular/core";
import { DisableOnRequestDirective } from "@core/directives/disable-on-request.directive";
import { CustomsModule } from "./customs/customs.module";
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [DisableOnRequestDirective],
  imports: [PagesModule],
  exports: [PagesModule, CustomsModule, DisableOnRequestDirective]
})
export class SharedModule { }
