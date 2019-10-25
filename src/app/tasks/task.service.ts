import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Project } from '../projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();

  constructor(private http: HttpClient, private router: Router) {
  }

  getTasks(projectId: string) {
    return this.http.get<{ message: string, tasks: any }>('http://localhost:3001/api/projects/' + projectId + '/tasks')
      .subscribe(taskData => {
        console.log(taskData.message);
        this.tasks = taskData.tasks;
        this.tasksUpdated.next([ ...this.tasks ]);
      });
  }

  getTaskUpdateListener() {
    return this.tasksUpdated.asObservable();
  }

  getTask(id: string) {
    return this.http.get<{ _id: string, title: string, content: string, _projectId: string }>('http://localhost:3001/api/tasks/' + id);
  }

  addTask(title: string, content: string, projectId: string) {
    const task: Task = { _id: null, title, content, _projectId: projectId };
    // console.log(project);
    this.http.post<{ message: string, taskId: string }>('http://localhost:3001/api/tasks/' + projectId, task).subscribe((taskData) => {
      const taskId = taskData.taskId;
      task._id = taskId;
      task._projectId = projectId;
      this.tasks.push(task);
      console.log(this.tasks);
      this.tasksUpdated.next([ ...this.tasks ]);
      this.router.navigate([ '/project/' + projectId + '/tasks' ]);
    });
  }

  updateTask(id: string, title: string, content: string, projectId: string) {
    const task: Task = { _id: id, title, content, _projectId: projectId };
    console.log(id, task);
    this.http.put('http://localhost:3001/api/tasks/' + id, task)
      .subscribe(response => {
        console.log(response);
        this.router.navigate([ '/project/' + projectId + '/tasks' ]);
      });
  }

  deleteTask(taskId: string) {
    this.http.delete('http://localhost:3001/api/tasks/' + taskId)
      .subscribe(response => {
        console.log(response);
        this.tasks = this.tasks.filter(task => task._id !== taskId);
        this.tasksUpdated.next([ ...this.tasks ]);
      });
  }
}
