import { Component, OnInit } from '@angular/core';
import {QuestionsServices} from './../services/questions.services';


@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.scss']
})

export class ConfirmacaoComponent implements OnInit {
    formulario = {};
    questions = [];
    options = [];

    constructor(
      private questionService: QuestionsServices,
    ) {

    }

    ngOnInit() {
      this.formulario = JSON.parse(localStorage.getItem('respostas'));
      if( this.formulario != null ) {
        this.getQuestions();
        this.getOptions();
      }
    }


  getQuestions() {
      this.questionService.getQuestions().subscribe( data=>{
          for( const i of data ) {
            const value = this.formulario[`perg`+i.number];
            i.options[value-1].check = true;
          }
          this.questions = data;
        }
      );
    }

    getOptions() {
      this.questionService.getOptions().subscribe( data=>{
          this.options = data;
        }
      );
    }

}
