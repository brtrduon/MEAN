import { Component, OnInit } from '@angular/core';
import { PollService } from './../poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  name;
  polls;

  constructor(private router: Router, private _pollService: PollService) { }

  ngOnInit() {
    this.name = this._pollService.getName();
    this._pollService.getAllPolls((data) => {
      // console.log(data);
      this.polls = data;
      console.log(this.polls);
    })
  }

  onDelete(id) {
    this._pollService.delete(id);
    this.ngOnInit();
  }

}
