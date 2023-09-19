import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeDetailComponent } from './employeee-detail.component';

describe('EmployeeeDetailComponent', () => {
  let component: EmployeeeDetailComponent;
  let fixture: ComponentFixture<EmployeeeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeeDetailComponent]
    });
    fixture = TestBed.createComponent(EmployeeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
