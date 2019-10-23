import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: [ './project.component.css' ]
})
export class ProjectComponent implements OnInit {
  projectId: string;
  isLoading = false;
  project: Project;
  tasks: any = [];

  constructor(private pService: ProjectService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('projectId')) {
        this.projectId = paramMap.get('projectId');
        this.isLoading = true;
        this.pService.getProject(this.projectId).subscribe(projectData => {
          console.log(projectData);
          this.isLoading = false;
          this.project = { _id: projectData._id, title: projectData.title, content: projectData.content };
        });
      } else {
        console.log('project not found!');
        this.router.navigate([ '/' ]);
      }
    });
  }

}
