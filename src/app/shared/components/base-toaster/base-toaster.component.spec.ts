import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseToasterComponent } from './base-toaster.component';

describe('BaseToasterComponent', () => {
  let component: BaseToasterComponent;
  let fixture: ComponentFixture<BaseToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseToasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
