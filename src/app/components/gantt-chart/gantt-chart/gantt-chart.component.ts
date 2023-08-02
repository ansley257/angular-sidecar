import { Component } from '@angular/core';

import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/task.model';
import { TaskDatesService } from 'src/app/services/task-dates.service';

@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.scss'],
})
export class GanttChartComponent {
  public tasks!: Task[];
  public startDate!: Date;
  public endDate!: Date;
  public numberOfTasks!: number;

  constructor(
    public tasksService: TasksService,
    public taskDatesService: TaskDatesService
  ) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      console.log('tasks', this.tasks);
      this.startDate = this.taskDatesService.getStartDate(this.tasks);
      this.endDate = this.taskDatesService.getEndDate(this.tasks);
      this.numberOfTasks = this.tasksService.getNumberOfTasks(this.tasks);
    });
  }
}
