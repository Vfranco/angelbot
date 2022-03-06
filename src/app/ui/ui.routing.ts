import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";


export const AdminRoute: Routes = [
  {
    path: 'admin/home',
    component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: '', loadChildren: () => import('./companies/companies.module').then(m => m.EmpresasModule) },
      { path: '', loadChildren: () => import('./licenses/licenses.module').then(m => m.LicensesModule) },
      { path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    ]
  }
]
