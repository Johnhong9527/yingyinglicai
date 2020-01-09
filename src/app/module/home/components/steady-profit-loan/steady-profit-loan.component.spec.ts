import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteadyProfitLoanComponent } from './steady-profit-loan.component';

describe('SteadyProfitLoanComponent', () => {
  let component: SteadyProfitLoanComponent;
  let fixture: ComponentFixture<SteadyProfitLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteadyProfitLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteadyProfitLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
