import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbieGuideComponent } from './newbie-guide.component';

describe('NewbieGuideComponent', () => {
  let component: NewbieGuideComponent;
  let fixture: ComponentFixture<NewbieGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbieGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbieGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
