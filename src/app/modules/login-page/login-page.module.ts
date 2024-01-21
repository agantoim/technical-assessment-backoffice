import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BaseToasterComponent } from 'src/app/shared/components/base-toaster/base-toaster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		LoginComponent,
		LoginCardComponent,
		BaseToasterComponent
	],
	imports: [
		CommonModule,
		LoginPageRoutingModule,
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

	]
})
export class LoginPageModule { }
