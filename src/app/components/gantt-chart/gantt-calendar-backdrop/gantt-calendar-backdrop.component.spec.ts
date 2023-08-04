import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttCalendarBackdropComponent } from './gantt-calendar-backdrop.component';

describe('GanttCalendarBackdropComponent', () => {
  let component: GanttCalendarBackdropComponent;
  let fixture: ComponentFixture<GanttCalendarBackdropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanttCalendarBackdropComponent]
    });
    fixture = TestBed.createComponent(GanttCalendarBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
