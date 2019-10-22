import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: [ './update-project.component.css' ]
})
export class UpdateProjectComponent implements OnInit, OnDestroy {

  // @ts-ignore
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemindex: number;
  editedItem: Project;
  projectId = null;

  constructor(private pService: ProjectService) {
  }

  ngOnInit() {
    // this.subscription = this.pService.startedEditing
    //   .subscribe((index: number) => {
    //     this.editMode = true;
    //     this.editedItemindex = index;
    //     this.editedItem = this.pService.getProject(index);
    //     this.slForm.setValue({
    //       name: this.editedItem.name,
    //       description: this.editedItem.description,
    //     });
    //   });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newProject = new Project(this.projectId, value.title, value.content);
    // if (this.editMode) {
    //   this.pService.updateProject(this.editedItemindex, newProject);
    // } else {
    this.pService.addProject(newProject);
    // }
    form.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
