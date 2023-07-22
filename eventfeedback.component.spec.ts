import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventfeedbackComponent } from './eventfeedback.component';

describe('EventfeedbackComponent', () => {
  let component: EventfeedbackComponent;
  let fixture: ComponentFixture<EventfeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventfeedbackComponent]
    });
    fixture = TestBed.createComponent(EventfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
