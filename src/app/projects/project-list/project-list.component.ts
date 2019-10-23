import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: [ './project-list.component.css' ]
})
export class ProjectListComponent implements OnInit, OnDestroy {
  projects: Project[];
  isLoading = false;

  private projectSub: Subscription;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.projectService.getProjects();
    this.projectSub = this.projectService.getProjectUpdateListener()
      .subscribe((projects: Project[]) => {
        this.isLoading = false;
        console.log(projects);
        this.projects = projects;
      });
  }

  onDelete(projectId: string) {
    this.projectService.deleteProject(projectId);
  }

  ngOnDestroy(): void {
    this.projectSub.unsubscribe();
  }

}
