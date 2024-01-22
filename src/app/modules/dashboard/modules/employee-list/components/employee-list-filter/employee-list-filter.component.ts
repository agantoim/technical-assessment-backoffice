import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-employee-list-filter',
    templateUrl: './employee-list-filter.component.html',
    styleUrls: ['./employee-list-filter.component.scss']
})
export class EmployeeListFilterComponent implements OnInit {
    @Output() searchClicked: EventEmitter<any> = new EventEmitter<any>();

    public employeeListFilterForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router
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

    public onSearch(): void {
        this.searchClicked.emit(this.employeeListFilterForm.value);
    }

    public onClickAddEmployee() {
        this.router.navigate([
            'dashboard/add-employee'
        ]);
    }
}
