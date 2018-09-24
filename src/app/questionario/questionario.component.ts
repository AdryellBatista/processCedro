import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})

export class QuestionarioComponent implements OnInit {

    objFormQuestions: FormGroup;

    constructor(
      private formBuilder: FormBuilder
    ) {
      this.objFormQuestions = formBuilder.group({
        compInvestimento:   ['', Validators.required],
        tempInvestimento: ['', Validators.required],
        percInvestimento: ['', Validators.required],
        // famiInvestimento: formBuilder.group({
        //   tituloRenda: ['', Validators.required],
        //   fundoInvest: ['', Validators.required],
        //   acoesaVista: ['', Validators.required],
        //   alugueAcoes: ['', Validators.required]
        // })
      });
    }

    ngOnInit() {

    }

    save() {

    }
}
