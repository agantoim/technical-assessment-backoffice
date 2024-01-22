import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-employee-page',
    templateUrl: './add-employee-page.component.html',
    styleUrls: ['./add-employee-page.component.scss']
})
export class AddEmployeePageComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    public onClickBackButton() {
        this.router.navigate(['dashboard/employee-list'])
    }

}
