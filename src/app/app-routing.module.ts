import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { UpdateProjectComponent } from './projects/update-project/update-project.component';
import { ProjectComponent } from './projects/project/project.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { UpdateTaskComponent } from './tasks/update-task/update-task.component';

const appRoutes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'add-project', component: UpdateProjectComponent },
  { path: 'edit/:projectId', component: UpdateProjectComponent },
  { path: 'project/:projectId', component: ProjectComponent },
  { path: 'project/:projectId/tasks', component: TaskListComponent },
  { path: 'project/:projectId/task/add-task', component: UpdateTaskComponent },
  { path: 'project/:projectId/task/edit/:taskId', component: UpdateTaskComponent },

];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
