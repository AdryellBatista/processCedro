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
        }
      );
    }

    save() {
      this.questionService.save(this.objFormQuestions.value);
      this.router.navigate(['confirmacao']);
    }

    voltar() {
      this.router.navigate(['home']);
    }
}
