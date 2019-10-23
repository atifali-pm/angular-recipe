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
  private projectsUpdated = new Subject<Project[]>();

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
                _id: post._id
              };
            });
          })
        ))
      .subscribe(transformedPost => {
        this.projects = transformedPost;
        this.projectsUpdated.next([ ...this.projects ]);
      });
  }

  getProjectUpdateListener() {
    return this.projectsUpdated.asObservable();
  }

  getProject(id: string) {
    return this.http.get<{ _id: string, title: string, content: string }>('http://localhost:3000/api/projects/' + id);
  }

  addProject(title: string, content: string) {
    const project: Project = { _id: null, title, content };
    // console.log(project);
    this.http.post<{ message: string, projectId: string }>('http://localhost:3000/api/projects', project).subscribe((postData) => {
      const projectId = postData.projectId;
      project._id = projectId;
      this.projects.push(project);
      console.log(this.projects);
      this.router.navigate([ '/' ]);
      this.projectsUpdated.next([ ...this.projects ]);
    });
  }

  updateProject(id: string, title: string, content: string) {
    const project: Project = { _id: id, title, content };
    console.log(id, project);
    this.http.put('http://localhost:3000/api/projects/' + id, project)
      .subscribe(response => {
        console.log(response);
        this.router.navigate([ '/' ]);
      });
  }

  deleteProject(id: string) {
    this.http.delete('http://localhost:3000/api/projects/' + id)
      .subscribe(response => {
        console.log(response);
        this.projects = this.projects.filter(project => project._id !== id);
        this.projectsUpdated.next([ ...this.projects ]);
      });
  }
}
