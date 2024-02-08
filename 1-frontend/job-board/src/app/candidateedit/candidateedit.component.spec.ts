import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateeditComponent } from './candidateedit.component';

describe('CandidateeditComponent', () => {
  let component: CandidateeditComponent;
  let fixture: ComponentFixture<CandidateeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidateeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
