import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class QuestionsServices {
   private url = 'https://my-json-server.typicode.com/AdryellBatista/data/';

  constructor(
    private http: HttpClient,
  ) {}


  getQuestions()  {
    return this.http.get<any>(this.url + 'questions');
  }

  getOptions()  {
    return this.http.get<any>(this.url + 'options');
  }

  save(obj)  {
    localStorage.setItem('respostas', JSON.stringify(obj));
  }

}
