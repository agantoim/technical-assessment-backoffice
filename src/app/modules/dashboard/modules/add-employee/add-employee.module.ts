import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmployeeRoutingModule } from './add-employee-routing.module';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';


@NgModule({
  declarations: [
    AddEmployeePageComponent
  ],
  imports: [
    CommonModule,
    AddEmployeeRoutingModule
  ]
})
export class AddEmployeeModule { }
