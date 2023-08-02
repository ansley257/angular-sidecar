import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DragAreaComponent } from './components/gantt-chart/drag-area/drag-area.component';
import { TaskBarComponent } from './components/gantt-chart/task-bar/task-bar.component';
import { DateColumnComponent } from './components/gantt-chart/date-column/date-column.component';
import { DateColumnHeaderComponent } from './components/gantt-chart/date-column-header/date-column-header.component';

@NgModule({
  declarations: [AppComponent, DragAreaComponent, TaskBarComponent, DateColumnComponent, DateColumnHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ResizableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
