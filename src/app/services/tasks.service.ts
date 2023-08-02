import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private url: string = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    const tasks = this.http.get<Task[]>(this.url);
    return tasks;
  }

  public updateTask(task: Task): Observable<Task> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.put<Task>(this.url, task, httpOptions);
  }
}
