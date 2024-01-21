import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';

const routes: Routes = [
  {
    path: '',
    component: AddEmployeePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmployeeRoutingModule { }
