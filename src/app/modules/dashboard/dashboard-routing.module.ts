import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/shared/service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'employee-list'
      },
      {
        path: 'employee-list',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/employee-list/employee-list.module').then(
          (m) => m.EmployeeListModule
        )
      },
      {
        path: 'employee-detail',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/employee-detail/employee-detail.module').then(
          (m) => m.EmployeeDetailModule
        )
      },
      {
        path: 'add-employee',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/add-employee/add-employee.module').then(
          (m) => m.AddEmployeeModule
        )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
