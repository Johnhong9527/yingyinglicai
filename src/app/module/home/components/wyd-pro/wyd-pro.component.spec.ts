import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WydProComponent } from './wyd-pro.component';

describe('WydProComponent', () => {
  let component: WydProComponent;
  let fixture: ComponentFixture<WydProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WydProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WydProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
