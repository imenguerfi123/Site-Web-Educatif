import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContainerComponent} from './home/container/container.component';
import {LoginComponent} from './login/login.component';
import {CoursComponent} from './home/cours/cours.component';
import {ContactComponent} from './home/contact/contact.component';
import {CoursdetComponent} from './home/coursdet/coursdet.component';

const routes: Routes = [{path: '', component: HomeComponent,
  children: [
    {path: '', component: ContainerComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cours', component: CoursComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'cours/:id/coursdet', component: CoursdetComponent}

  ],},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
