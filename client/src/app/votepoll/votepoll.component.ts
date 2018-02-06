import { Component, OnInit } from '@angular/core';
import { PollService } from './../poll.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-votepoll',
  templateUrl: './votepoll.component.html',
  styleUrls: ['./votepoll.component.css']
})
export class VotepollComponent implements OnInit {

  question;
  id;

  constructor(private router: Router, private _pollService: PollService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      this.id = params.get('id');
    });

    this._pollService.getOnePoll(this.id, (data)=>{
      this.question = data;
      console.log(this.question);
    });
  }

  onVote(idanswer) {
    this._pollService.vote(idanswer);
    this.ngOnInit();
  }

}
