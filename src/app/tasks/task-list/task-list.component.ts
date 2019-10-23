import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Subscription } from 'rxjs';
import { Task } from '../task.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [ './task-list.component.css' ]
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  public projectId: string;
  isLoading = false;

  private taskSub: Subscription;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('projectId')) {
        this.isLoading = true;
        this.projectId = paramMap.get('projectId');
        this.taskService.getTasks(this.projectId);
        this.taskSub = this.taskService.getTaskUpdateListener()
          .subscribe((tasks: Task[]) => {
            this.isLoading = false;
            console.log(tasks);
            this.tasks = tasks;
          });
      } else {
        console.log('Project not found!');
        this.router.navigate([ '/' ]);
      }
    });
  }

  onDelete(taskId: string) {
    this.taskService.deleteTask(taskId);
  }

}
