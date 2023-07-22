import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizernotificationsComponent } from './organizernotifications.component';

describe('OrganizernotificationsComponent', () => {
  let component: OrganizernotificationsComponent;
  let fixture: ComponentFixture<OrganizernotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizernotificationsComponent]
    });
    fixture = TestBed.createComponent(OrganizernotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
