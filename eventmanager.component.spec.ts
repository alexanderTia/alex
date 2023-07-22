import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmanagerComponent } from './eventmanager.component';

describe('EventmanagerComponent', () => {
  let component: EventmanagerComponent;
  let fixture: ComponentFixture<EventmanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventmanagerComponent]
    });
    fixture = TestBed.createComponent(EventmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
