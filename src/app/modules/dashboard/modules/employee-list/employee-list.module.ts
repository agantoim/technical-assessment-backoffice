import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListPageComponent } from './pages/employee-list-page/employee-list-page.component';
import { EmployeeListFilterComponent } from './components/employee-list-filter/employee-list-filter.component';
import { EmployeeListDataComponent } from './components/employee-list-data/employee-list-data.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [
    EmployeeListPageComponent,
    EmployeeListFilterComponent,
    EmployeeListDataComponent,
  ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    ComponentsModule
  ]
})
export class EmployeeListModule { }
