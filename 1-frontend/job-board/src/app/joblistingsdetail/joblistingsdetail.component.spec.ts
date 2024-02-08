import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblistingsdetailComponent } from './joblistingsdetail.component';

describe('JoblistingsdetailComponent', () => {
  let component: JoblistingsdetailComponent;
  let fixture: ComponentFixture<JoblistingsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoblistingsdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoblistingsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
