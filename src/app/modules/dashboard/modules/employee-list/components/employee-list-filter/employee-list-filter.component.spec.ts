import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListFilterComponent } from './employee-list-filter.component';

describe('EmployeeListFilterComponent', () => {
  let component: EmployeeListFilterComponent;
  let fixture: ComponentFixture<EmployeeListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
