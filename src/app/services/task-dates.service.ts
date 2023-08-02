import { Injectable } from '@angular/core';

import { DayWidthInPx } from '../global-constants';

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
}
