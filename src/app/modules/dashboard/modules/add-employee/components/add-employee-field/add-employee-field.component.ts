import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMPLOYEE_DATABASE } from 'src/app/shared/constant/employee-data.const';

@Component({
  selector: 'app-add-employee-field',
  templateUrl: './add-employee-field.component.html',
  styleUrls: ['./add-employee-field.component.scss']
})
export class AddEmployeeFieldComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addNewEmployee() {
    if (this.employeeForm.valid) {
      const newEmployee = this.employeeForm.value;
      newEmployee.id = EMPLOYEE_DATABASE.length + 1;

      EMPLOYEE_DATABASE.push(newEmployee);
      this.employeeForm.reset();
      this.employeeForm.markAsPristine();
      this.employeeForm.markAsUntouched();
    }
  }

}
