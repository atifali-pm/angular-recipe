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
          // this.projectId = paramMap.get('projectId');
          // this.isLoading = true;
          // this.taskService.getProject(this.projectId).subscribe(projectData => {
          //   console.log(projectData);
          //   this.isLoading = false;
          //   this.project = { _id: projectData._id, title: projectData.title, content: projectData.content };
          // });
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
      this.taskService.addProject(title, content, this.projectId);
    } else {
      // this.taskService.updateProject(this.taskId, title, content, this.projectId);
    }
    form.resetForm();
  }

}
