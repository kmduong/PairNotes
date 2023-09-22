import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysummaryComponent } from './displaysummary.component';

describe('DisplaysummaryComponent', () => {
  let component: DisplaysummaryComponent;
  let fixture: ComponentFixture<DisplaysummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaysummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
