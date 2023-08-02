import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-column',
  templateUrl: './date-column.component.html',
  styleUrls: ['./date-column.component.scss'],
})
export class DateColumnComponent {
  @Input() numberOfTasks!: number;
  @Input() date!: Date;

  public loopingArray: number[];

  constructor() {
    this.loopingArray = Array.from(Array(this.numberOfTasks), (_, i) => i);
  }
}
