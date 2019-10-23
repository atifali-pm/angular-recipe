import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { UpdateProjectComponent } from './projects/update-project/update-project.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './projects/project/project.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskComponent } from './tasks/task/task.component';
import { UpdateTaskComponent } from './tasks/update-task/update-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectListComponent,
    UpdateProjectComponent,
    ProjectComponent,
    TaskListComponent,
    TaskComponent,
    UpdateTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
