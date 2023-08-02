import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

import { Task } from 'src/app/interfaces/task.model';
import { TaskDatesService } from 'src/app/services/task-dates.service';
import { DayWidthInPx } from 'src/app/global-constants';

const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2,
}

const enum Side {
  NONE = 0,
  LEFT = 1,
  RIGHT = 2,
}

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.scss'],
})
export class TaskBarComponent {
  @Input() task!: Task;
  @Input() ganttFirstDate!: Date;
  @ViewChild('taskBar') taskBar!: ElementRef;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse = { x: event.clientX };
    if (this.status === Status.RESIZE) this.resize();
  }

  private status: Status;
  private side: Side;
  private startX!: number;
  private mouse: { x: number } = { x: 0 };

  public width!: number;
  public taskOffset!: number;

  constructor(private taskDatesService: TaskDatesService) {
    this.status = Status.OFF;
    this.side = Side.NONE;
  }

  ngOnInit(): void {
    this.width = this.taskDatesService.calculateTaskWidth(
      this.task.startDate,
      this.task.endDate
    );
    this.taskOffset = this.taskDatesService.calculateTaskOffset(
      this.task.startDate,
      this.ganttFirstDate
    );
  }

  ngAfterViewInit(): void {
    this.startX = this.taskBar.nativeElement.getBoundingClientRect().left;
  }

  onMouseDown(event: MouseEvent, source: string): void {
    if (source === 'left' || source === 'right') {
      this.status = Status.RESIZE;
      this.side = source === 'left' ? Side.LEFT : Side.RIGHT;
      this.startX = this.mouse.x;
    } else {
      this.status = Status.MOVE;
    }
  }

  onMouseUp(event: MouseEvent, status: Status): void {
    if (this.status === 1) event?.stopPropagation();
    this.status = status;
  }

  private resize(): void {
    if (this.resizeCondMeet()) {
      const delta = this.mouse.x - this.startX;
      const numFullUnitsMoved = Math.floor(delta / DayWidthInPx);

      // If the mouse has moved at least one full unit, resize the task bar.
      if (numFullUnitsMoved !== 0) {
        const distanceToResize = numFullUnitsMoved * DayWidthInPx;

        if (this.side === Side.LEFT) {
          this.width -= distanceToResize;
          this.taskOffset += distanceToResize;
        } else if (this.side === Side.RIGHT) {
          this.width += distanceToResize;
        }

        // Update startX to the position of the last full unit that the mouse moved to.
        this.startX += distanceToResize;
      }
    }
  }

  private resizeCondMeet(): boolean {
    const delta = this.mouse.x - this.startX;

    if (this.side === Side.LEFT) {
      return this.width - delta >= DayWidthInPx && this.taskOffset + delta >= 0;
    } else if (this.side === Side.RIGHT) {
      return this.width + delta >= DayWidthInPx;
    }
    return false;
  }
}
