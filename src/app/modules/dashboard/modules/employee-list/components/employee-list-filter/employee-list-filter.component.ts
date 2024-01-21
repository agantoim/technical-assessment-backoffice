import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-employee-list-filter',
    templateUrl: './employee-list-filter.component.html',
    styleUrls: ['./employee-list-filter.component.scss']
})
export class EmployeeListFilterComponent implements OnInit {
    public employeeListFilterForm: FormGroup;

    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.initEmployeeListFilterForm()
    }

    private initEmployeeListFilterForm() {
        this.employeeListFilterForm = this.fb.group({
            username: [''],
            name: [''],
            email: ['']
        })
    }

    get username() {
        return this.employeeListFilterForm.get('username');
    }

    get name() {
        return this.employeeListFilterForm.get('name');
    }

    get email() {
        return this.employeeListFilterForm.get('email');
    }

}
