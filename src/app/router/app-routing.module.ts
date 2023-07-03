import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../pages/login/login.component';
import { UsersComponent } from '../pages/users/users.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }