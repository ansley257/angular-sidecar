import { Component } from '@angular/core';

import { TASKS } from 'src/app/mock-data/tasks.mock';

@Component({
  selector: 'app-drag-area',
  templateUrl: './drag-area.component.html',
  styleUrls: ['./drag-area.component.scss'],
})
export class DragAreaComponent {
  public task = TASKS[0];
  public ganttFirstDate = new Date(2023, 7, 28);

  constructor() {}
}
