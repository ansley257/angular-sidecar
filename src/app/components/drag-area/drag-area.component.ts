import { Component } from '@angular/core';

import { Task } from 'src/app/interfaces/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-drag-area',
  templateUrl: './drag-area.component.html',
  styleUrls: ['./drag-area.component.scss'],
})
export class DragAreaComponent {
  public task!: Task;
  public ganttFirstDate: Date = new Date(2023, 7, 28);

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      tasks.forEach((task) => {
        task.startDate = new Date(task.startDate);
        task.endDate = new Date(task.endDate);
      });
      this.task = tasks[0];
    });
  }
}
