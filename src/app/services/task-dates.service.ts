import { Injectable } from '@angular/core';

import { DayWidthInPx } from '../global-constants';
import { Task } from '../interfaces/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskDatesService {
  constructor() {}

  calculateTaskWidth(startDate: Date, endDate: Date): number {
    const start = startDate.getTime();
    const end = endDate.getTime();
    const total = end - start;
    const days = total / (1000 * 60 * 60 * 24);
    const width = days * DayWidthInPx;
    return width;
  }

  calculateDaysWidth(days: number): number {
    const width = days * DayWidthInPx;
    return width;
  }

  calculateTaskOffset(startDate: Date, ganttFirstDate: Date): number {
    const start = startDate.getTime();
    const first = ganttFirstDate.getTime();
    const total = start - first;
    const days = total / (1000 * 60 * 60 * 24);
    const offset = days * DayWidthInPx;
    return offset;
  }

  ganttFirstDate(tasks: Task[]): Date {
    return tasks.reduce((minDate, task) => {
      return task.startDate < minDate ? task.startDate : minDate;
    }, tasks[0].startDate);
  }

  getDateRangeArray(startDate: Date, endDate: Date): Date[] {
    const datesArray = [];
    const currentDate = new Date(startDate);
    // add 7 days to the start and end dates
    currentDate.setDate(currentDate.getDate() - 7);
    endDate.setDate(endDate.getDate() + 7);
    while (currentDate <= endDate) {
      datesArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return datesArray;
  }
}
