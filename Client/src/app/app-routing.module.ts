import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProjectDeleteDialogboxComponent } from './project-delete-dialogbox/project-delete-dialogbox.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { AuthService as AuthGuard } from 'src/service/auth.service';
import { ProjectCreationsComponent } from './project-creations/project-creations.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: '', component: LoginComponent },
  {
    path: '',
    redirectTo: 'LoginComponent',
    pathMatch: 'full',
  },
  {
    path: 'project-display',
    component: ProjectDisplayComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nav-bar',
    component: NavBarComponent,
  },
  {
    path: 'project-delete-dialogbox',
    component: ProjectDeleteDialogboxComponent,
  },
  {
    path: 'project-dashboard',
    component: ProjectDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-new-project',
    component: CreateNewProjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'project-creations',
    component: ProjectCreationsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
