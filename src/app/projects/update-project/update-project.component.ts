import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: [ './update-project.component.css' ]
})
export class UpdateProjectComponent implements OnInit, OnDestroy {

  // @ts-ignore
  @ViewChild('f') slForm: NgForm;

  enteredTitle = '';
  enteredContent = '';
  public mode = 'create';
  public projectId = null;
  public project: Project;
  isLoading = false;

  constructor(private pService: ProjectService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('projectId')) {
        this.mode = 'edit';
        this.projectId = paramMap.get('projectId');
        this.isLoading = true;
        this.pService.getProject(this.projectId).subscribe(projectData => {
          console.log(projectData);
          this.isLoading = false;
          this.project = { _id: projectData._id, title: projectData.title, content: projectData.content };
        });
      } else {
        this.mode = 'create';
        this.projectId = null;
        this.project = null;
      }
    });
  }

  onSaveProject(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    const title = form.value.title;
    const content = form.value.content;
    if (this.mode === 'create') {
      this.pService.addProject(title, content);
    } else {
      this.pService.updateProject(this.projectId, title, content);
    }
    form.resetForm();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
