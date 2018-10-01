import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import {QuestionsServices} from './../services/questions.services';

import { Router } from '@angular/router';


@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})

export class QuestionarioComponent implements OnInit {
  options2 = [
    {value: 1, text: 'AAA'},
    {value: 2, text: 'bb'},
    {value: 3, text: 'ccc'},
    {value: 4, text: 'dddd'},
    {value: 5, text: 'eeee'},
    {value: 6, text: 'fff'},
    {value: 1, text: 'gggg'},
    {value: 2, text: 'hhh'},
    {value: 3, text: 'Opcao 2'},
    {value: 4, text: 'Opcao1'},
    {value: 5, text: 'Opcao 3'},
    {value: 6, text: 'Opcao 4'}
  ];
    objFormQuestions: FormGroup;
    questions = [];
    options = [];
    constructor(
      private formBuilder: FormBuilder,
      private questionService: QuestionsServices,
      private router: Router
    ) {
      this.objFormQuestions = formBuilder.group({
        perg4: new FormGroup({
          tituloRenda: new FormControl(null, Validators.required),
          fundoInvest: new FormControl(null, Validators.required),
          acoesaVista: new FormControl(null, Validators.required),
          alugueAcoes: new FormControl(null, Validators.required)
        })
      });
    }

    ngOnInit() {
      this.getQuestions();
      this.getOptions();
    }

    getQuestions() {
      this.questionService.getQuestions().subscribe(data=> {
          for(const i of data) {
            this.objFormQuestions.addControl(i.name, new FormControl('', Validators.required));
          }

          this.questions = data;
        }
      );
    }

    getOptions() {
      this.questionService.getOptions().subscribe(data=> {
          this.options = data;
          console.log('uai >> ',this.options);

        }
      );
    }
    teste(event){
      console.log(event);
    }
    save() {
      this.questionService.save(this.objFormQuestions.value);
      this.router.navigate(['confirmacao']);
    }

    voltar() {
      this.router.navigate(['home']);
    }
}
