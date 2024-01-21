import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeListDataModel } from '../../shared/model/employee-list-data.model';
import { PaginationModel } from 'src/app/shared/model/pagination.model';
import { EmployeeListTableHeaderModel } from '../../shared/model/employee-list-table-header.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { EMPLOYEE_DATABASE } from 'src/app/shared/constant/employee-data.const';
import { EMPLOYEE_TABLE_HEADER } from '../../shared/const/employee-table-header.const';

@Component({
    selector: 'app-employee-list-data',
    templateUrl: './employee-list-data.component.html',
    styleUrls: ['./employee-list-data.component.scss']
})
export class EmployeeListDataComponent implements OnInit {

    @Input()
    public employeeTableHeader: string[];

    @Input()
    public employeeListData: EmployeeListDataModel[];

    public employeeTableDataSource: MatTableDataSource<EmployeeListDataModel>;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initEmployeeTableData();
    }

    private initEmployeeTableData() {
        this.employeeTableDataSource = new MatTableDataSource(this.employeeListData);
    }

    public onClickEmployeeRow(employeeData: EmployeeListDataModel) {
        const params = {
            'id': employeeData.id
        }
        this.router.navigate(['dashboard/employee-detail'], {
            queryParams: params
        })
    }

    onEditEmployeeData(employeeData: EmployeeListDataModel, event: Event) {
        event.stopImmediatePropagation();
        console.log('Edit clicked:', employeeData);
    }

    onDeleteEmployeeData(employeeData: EmployeeListDataModel, event: Event) {
        event.stopImmediatePropagation();
        console.log('Delete clicked:', employeeData);
    }

}