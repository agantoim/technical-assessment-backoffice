import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeFieldComponent } from './add-employee-field.component';

describe('AddEmployeeFieldComponent', () => {
  let component: AddEmployeeFieldComponent;
  let fixture: ComponentFixture<AddEmployeeFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
