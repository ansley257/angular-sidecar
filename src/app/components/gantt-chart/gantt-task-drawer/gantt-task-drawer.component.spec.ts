import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttTaskDrawerComponent } from './gantt-task-drawer.component';

describe('GanttTaskDrawerComponent', () => {
  let component: GanttTaskDrawerComponent;
  let fixture: ComponentFixture<GanttTaskDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanttTaskDrawerComponent]
    });
    fixture = TestBed.createComponent(GanttTaskDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
