import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeListTableHeaderModel } from '../../shared/model/employee-list-table-header.model';
import { EmployeeListDataModel } from '../../shared/model/employee-list-data.model';
import { PaginationModel } from 'src/app/shared/model/pagination.model';
import { EMPLOYEE_TABLE_HEADER } from '../../shared/const/employee-table-header.const';
import { EMPLOYEE_DATABASE } from 'src/app/shared/constant/employee-data.const';
import { StorageService } from 'src/app/shared/service/storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-list-page',
    templateUrl: './employee-list-page.component.html',
    styleUrls: ['./employee-list-page.component.scss']
})
export class EmployeeListPageComponent implements OnInit {
    public employeeTableHeader: string[];
    public employeeListData: EmployeeListDataModel[];
    public toasterMessage: string;
    public toasterType: 'success' | 'warning';
    public toasterShow: boolean = false;
    private originalEmployeeListData: EmployeeListDataModel[];

    constructor(
        private storageService: StorageService,
        private router: Router
    ) {
        this.employeeListData = [];
    }

    ngOnInit(): void {
        this.setEmployeeTableData();
        this.originalEmployeeListData = [...this.employeeListData];
    }

    private setEmployeeTableData() {
        this.employeeTableHeader = EMPLOYEE_TABLE_HEADER;
        this.employeeListData = EMPLOYEE_DATABASE;
    }

    public onLogOutButtonClicked() {
        this.storageService.clear();
        this.router.navigate([
            '/login'
        ]);
    }

    public onToasterClose(): void {
        this.toasterShow = false;
    }

    public onEditClicked() {
        this.toasterMessage = 'Edit button clicked!';
        this.toasterType = 'success';
        this.toasterShow = true;
    }

    public onDeleteClicked() {
        this.toasterMessage = 'Delete button clicked!';
        this.toasterType = 'warning';
        this.toasterShow = true;
    }

    public onSearch(searchCriteria: any): void {
        this.employeeListData = this.originalEmployeeListData.filter(employee => {
            const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();

            return (
                employee.username.includes(searchCriteria.username) &&
                fullName.includes(searchCriteria.name.toLowerCase()) &&
                employee.email.includes(searchCriteria.email)
            );
        });
    }

}
