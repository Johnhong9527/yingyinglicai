import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyGuaranteeComponent } from './safety-guarantee.component';

describe('SafetyGuaranteeComponent', () => {
  let component: SafetyGuaranteeComponent;
  let fixture: ComponentFixture<SafetyGuaranteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyGuaranteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyGuaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
