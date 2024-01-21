import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

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
        loadChildren: () => import('./modules/employee-list/employee-list.module').then(
          (m) => m.EmployeeListModule
        )
      },
      {
        path: 'employee-detail',
        loadChildren: () => import('./modules/employee-detail/employee-detail.module').then(
          (m) => m.EmployeeDetailModule
        )
      },
      {
        path: 'add-employee',
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
