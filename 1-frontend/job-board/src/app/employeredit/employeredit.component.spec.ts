import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployereditComponent } from './employeredit.component';

describe('EmployereditComponent', () => {
  let component: EmployereditComponent;
  let fixture: ComponentFixture<EmployereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployereditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
