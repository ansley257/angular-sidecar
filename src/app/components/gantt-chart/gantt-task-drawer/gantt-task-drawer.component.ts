import { Component } from '@angular/core';

@Component({
  selector: 'app-gantt-task-drawer',
  templateUrl: './gantt-task-drawer.component.html',
  styleUrls: ['./gantt-task-drawer.component.scss'],
})
export class GanttTaskDrawerComponent {
  events: string[] = [];
  opened: boolean = false;

  shouldRun = true;
}
