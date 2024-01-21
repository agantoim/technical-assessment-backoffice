import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListPageComponent } from './pages/employee-list-page/employee-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeListRoutingModule { }
