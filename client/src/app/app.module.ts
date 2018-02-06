import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PollService } from './poll.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { AddpollComponent } from './addpoll/addpoll.component';
import { VotepollComponent } from './votepoll/votepoll.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    AddpollComponent,
    VotepollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
