import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task.model';
import { DayWidthInPx } from 'src/app/global-constants';

@Component({
  selector: 'app-date-column-header',
  templateUrl: './date-column-header.component.html',
  styleUrls: ['./date-column-header.component.scss'],
})
export class DateColumnHeaderComponent {
  @Input() date: Date = new Date();

  public ganttWidth: number = DayWidthInPx - 1;
}
