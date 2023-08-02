import { Component, Input } from '@angular/core';
import { Task } from 'src/app/interfaces/task.model';

@Component({
  selector: 'app-date-column-header',
  templateUrl: './date-column-header.component.html',
  styleUrls: ['./date-column-header.component.scss'],
})
export class DateColumnHeaderComponent {
  @Input() date: Date = new Date();
}
