import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { VotepollComponent } from './votepoll/votepoll.component';
import { AddpollComponent } from './addpoll/addpoll.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dash',
    component: DashComponent,
  },
  {
    path: 'votepoll/:id',
    component: VotepollComponent,
  },
  {
    path: 'addpoll',
    component: AddpollComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
