import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageService } from './shared/service/storage.service';
import { AuthGuard } from './shared/service/auth-guard.service';
import { BaseToasterComponent } from './shared/components/base-toaster/base-toaster.component';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ComponentsModule
	],
	providers: [StorageService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
