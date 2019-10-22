import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];
  private postsUpdated = new Subject<Project[]>();

  constructor(private http: HttpClient, private router: Router) {
  }

  getProjects() {
    return this.http.get<{ message: string, projects: any }>('http://localhost:3000/api/projects')
      .pipe(
        map((postData => {
            return postData.projects.map(post => {
              return {
                title: post.title,
                content: post.content,
                id: post._id
              };
            });
          })
        ))
      .subscribe(transformedPost => {
        this.projects = transformedPost;
        this.postsUpdated.next([ ...this.projects ]);
      });
  }

  getProjectUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addProject(newProject: Project) {
    const project: Project = { _id: null, title: newProject.title, content: newProject.content };
    // console.log(project);
    this.http.post<{ message: string, projectId: string }>('http://localhost:3000/api/projects', project).subscribe((postData) => {
      const projectId = postData.projectId;
      project._id = projectId;
      this.projects.push(project);
      console.log(this.projects);
      this.router.navigate([ '/' ]);
      this.postsUpdated.next([ ...this.projects ]);
    });

  }
}
