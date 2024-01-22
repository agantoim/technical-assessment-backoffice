import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeListDataModel } from '../../../employee-list/shared/model/employee-list-data.model';
import { EMPLOYEE_DATABASE } from 'src/app/shared/constant/employee-data.const';

@Component({
    selector: 'app-employee-detail-page',
    templateUrl: './employee-detail-page.component.html',
    styleUrls: ['./employee-detail-page.component.scss']
})
export class EmployeeDetailPageComponent implements OnInit {

    public employeeId: number;
    public employeeData: EmployeeListDataModel = {} as EmployeeListDataModel;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getEmployeeData();
    }

    private getEmployeeData() {
        this.employeeId = Number(this.route.snapshot.queryParamMap.get('id'));
        const findEmployeeData = EMPLOYEE_DATABASE.find(emp => emp.id === this.employeeId);
        this.employeeData = findEmployeeData || ({} as EmployeeListDataModel);
    }

    public onClickBackButton() {
        this.router.navigate(['dashboard/employee-list'])
    }
}
