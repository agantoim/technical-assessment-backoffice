import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailRoutingModule } from './employee-detail-routing.module';
import { EmployeeDetailPageComponent } from './pages/employee-detail-page/employee-detail-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RupiahCurrencyPipe } from 'src/app/shared/pipe/rupiah-currency.pipe';
import { FullDateFormatPipe } from 'src/app/shared/pipe/full-date-format.pipe';


@NgModule({
  declarations: [
    EmployeeDetailPageComponent,
    RupiahCurrencyPipe,
    FullDateFormatPipe
  ],
  imports: [
    CommonModule,
    EmployeeDetailRoutingModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class EmployeeDetailModule { }
