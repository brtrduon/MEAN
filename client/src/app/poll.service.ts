import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PollService {

  name;

  constructor(private _http: Http) { }

  setName(user) {
    this.name = user;
  }

  getName() {
    return this.name;
  }

  getAllPolls(callback){
    this._http.get('/polls').subscribe(
      (response) => {
        callback(response.json())
      },
      (err) => {console.log(err);}
    )
  }

  getOnePoll(id, callback) {
    this._http.get(`/onepoll/${id}`).subscribe(
      (response) => {
        callback(response.json())
      },
      (err) => {console.log(err);}
    )
  }

  addQuestion(asker, question) {
    this._http.post('/question', {asker: asker, question: question}).subscribe();
  }

  addOption(question, option1, option2, option3, option4) {
    this._http.post('/options', {question: question, option1: option1, option2: option2, option3: option3, option4: option4}).subscribe();
  }

  vote(id) {
    this._http.post('/vote', {id: id}).subscribe();
  }

  delete(id) {
    this._http.post('/delete', {id: id}).subscribe();
  }
}
