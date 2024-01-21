import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeListTableHeaderModel } from '../../shared/model/employee-list-table-header.model';
import { EmployeeListDataModel } from '../../shared/model/employee-list-data.model';
import { PaginationModel } from 'src/app/shared/model/pagination.model';
import { EMPLOYEE_TABLE_HEADER } from '../../shared/const/employee-table-header.const';
import { EMPLOYEE_DATABASE } from 'src/app/shared/constant/employee-data.const';

@Component({
    selector: 'app-employee-list-page',
    templateUrl: './employee-list-page.component.html',
    styleUrls: ['./employee-list-page.component.scss']
})
export class EmployeeListPageComponent implements OnInit {

    public employeeTableHeader: string[];

    public employeeListData: EmployeeListDataModel[];

    constructor() {
        this.employeeListData = [];
    }

    ngOnInit(): void {
        this.setEmployeeTableData();
    }

    private setEmployeeTableData() {
        this.employeeTableHeader = EMPLOYEE_TABLE_HEADER;
        this.employeeListData = EMPLOYEE_DATABASE;
    }
}
