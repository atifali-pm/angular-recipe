import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: [ './update-task.component.css' ]
})
export class UpdateTaskComponent implements OnInit {

  projectId: string;
  taskId: string;
  isUpdating = false;
  isLoading = false;
  task: Task;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('projectId')) {
        this.projectId = paramMap.get('projectId');
        if (paramMap.has('taskId')) {
          this.isUpdating = true;
          this.taskId = paramMap.get('taskId');
          this.isLoading = true;
          this.taskService.getTask(this.taskId).subscribe(taskData => {
            console.log(taskData);
            this.isLoading = false;
            this.task = { _id: taskData._id, title: taskData.title, content: taskData.content, _projectId: this.projectId };
          });
        } else {
          this.taskId = null;
          this.task = null;
        }
      } else {
        console.log('Project not found!');
        this.router.navigate([ '/' ]);
      }
    });
  }

  onSaveTask(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    const title = form.value.title;
    const content = form.value.content;
    if (!this.isUpdating) {
      this.taskService.addTask(title, content, this.projectId);
    } else {
       this.taskService.updateTask(this.taskId, title, content, this.projectId);
    }
    form.resetForm();
  }

}
