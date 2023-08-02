import { Component, Input } from '@angular/core';
import { DayWidthInPx, TaskHeightInPx } from '../../../global-constants';

@Component({
  selector: 'app-date-column',
  templateUrl: './date-column.component.html',
  styleUrls: ['./date-column.component.scss'],
})
export class DateColumnComponent {
  @Input() numberOfTasks!: number;
  @Input() date!: Date;

  public loopingArray!: number[];
  public dayWidthInPx: number = DayWidthInPx;
  public taskHeightInPx: number = TaskHeightInPx;

  constructor() {}

  ngOnInit(): void {
    this.loopingArray = Array.from(Array(this.numberOfTasks), (_, i) => i);
  }
}
