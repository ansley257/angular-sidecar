import { Component, Input } from '@angular/core';

import { TaskDatesService } from 'src/app/services/task-dates.service';

@Component({
  selector: 'app-gantt-calendar-backdrop',
  templateUrl: './gantt-calendar-backdrop.component.html',
  styleUrls: ['./gantt-calendar-backdrop.component.scss'],
})
export class GanttCalendarBackdropComponent {
  @Input() startDate!: Date;
  @Input() endDate!: Date;
  @Input() numberOfTasks!: number;

  public datesArray!: Date[];

  constructor(private taskDatesService: TaskDatesService) {}

  ngOnInit(): void {
    console.log('startDate', this.startDate);
    console.log('endDate', this.endDate);
    this.datesArray = this.taskDatesService.getDateRangeArray(
      this.startDate,
      this.endDate
    );
  }
}
