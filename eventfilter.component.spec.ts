import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventfilterComponent } from './eventfilter.component';

describe('EventfilterComponent', () => {
  let component: EventfilterComponent;
  let fixture: ComponentFixture<EventfilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventfilterComponent]
    });
    fixture = TestBed.createComponent(EventfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
