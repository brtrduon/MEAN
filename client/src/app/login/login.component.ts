import { Component, OnInit } from '@angular/core';
import { PollService } from './../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name;

  constructor(private router: Router, private _pollService: PollService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.name);
    this._pollService.setName(this.name);
    this.router.navigate(['/dash']);
  }

}
