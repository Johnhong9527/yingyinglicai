import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YingbaoSeriesComponent } from './yingbao-series.component';

describe('YingbaoSeriesComponent', () => {
  let component: YingbaoSeriesComponent;
  let fixture: ComponentFixture<YingbaoSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YingbaoSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YingbaoSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
