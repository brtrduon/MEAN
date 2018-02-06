import { Component, OnInit } from '@angular/core';
import { PollService } from './../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpoll',
  templateUrl: './addpoll.component.html',
  styleUrls: ['./addpoll.component.css']
})
export class AddpollComponent implements OnInit {

  question;
  option1;
  option2;
  option3;
  option4;
  name;
  id;

  constructor(private router: Router, private _pollService: PollService) { }

  ngOnInit() {
    this.name = this._pollService.getName();
  }

  onSubmit() {
    this._pollService.addQuestion(this.name, this.question);
    this._pollService.addOption(this.question, this.option1, this.option2, this.option3, this.option4);
    this.router.navigate(['/dash']);
  }

}
