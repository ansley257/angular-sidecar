import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ResizableModule } from 'angular-resizable-element';

import { AppComponent } from './app.component';
import { DragAreaComponent } from './components/drag-area/drag-area.component';
import { TaskBarComponent } from './components/task-bar/task-bar.component';

@NgModule({
  declarations: [AppComponent, DragAreaComponent, TaskBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ResizableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
