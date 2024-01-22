import { NgModule } from "@angular/core";
import { BaseToasterComponent } from "./base-toaster/base-toaster.component";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "src/app/modules/dashboard/dashboard-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        BaseToasterComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        BaseToasterComponent
    ]
})
export class ComponentsModule { }