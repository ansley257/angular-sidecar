import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { DragAreaComponent } from './components/gantt-chart/drag-area/drag-area.component';
import { TaskBarComponent } from './components/gantt-chart/task-bar/task-bar.component';
import { DateColumnComponent } from './components/gantt-chart/date-column/date-column.component';
import { DateColumnHeaderComponent } from './components/gantt-chart/date-column-header/date-column-header.component';
import { GanttChartComponent } from './components/gantt-chart/gantt-chart/gantt-chart.component';
import { GanttCalendarBackdropComponent } from './components/gantt-chart/gantt-calendar-backdrop/gantt-calendar-backdrop.component';
import { GanttTaskDrawerComponent } from './components/gantt-chart/gantt-task-drawer/gantt-task-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    DragAreaComponent,
    TaskBarComponent,
    DateColumnComponent,
    DateColumnHeaderComponent,
    GanttChartComponent,
    GanttCalendarBackdropComponent,
    GanttTaskDrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ResizableModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
