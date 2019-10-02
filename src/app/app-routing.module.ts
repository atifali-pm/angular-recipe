import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UserComponent },
  { path: 'users/:id', component: UserComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
