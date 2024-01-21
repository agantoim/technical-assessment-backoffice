import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailPageComponent } from './pages/employee-detail-page/employee-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailRoutingModule { }
