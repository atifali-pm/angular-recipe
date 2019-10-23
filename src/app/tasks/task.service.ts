import { Injectable } from '@angular/core';
import { Project } from '../projects/project.model';
import { Task } from './task.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();

  constructor(private http: HttpClient, private router: Router) {
  }

  addProject(title: string, content: string, projectId: string) {
    const task: Task = { _id: null, title, content, _projectId: projectId };
    // console.log(project);
    this.http.post<{ message: string, taskId: string }>('http://localhost:3000/api/tasks/' + projectId, task).subscribe((taskData) => {
      const taskId = taskData.taskId;
      task._id = taskId;
      task._projectId = projectId;
      this.tasks.push(task);
      console.log(this.tasks);
      this.tasksUpdated.next([ ...this.tasks ]);
      this.router.navigate([ '/projects' + projectId + '/tasks' ]);
    });
  }
}
