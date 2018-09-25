import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {MatDialog } from '@angular/material';

import { ModalHomeComponent } from './modalHome.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    dialogRef: any;
    constructor(
      public  dialog: MatDialog,
      private router: Router
    ) {

    }

    ngOnInit() {

    }

    openNao() {
      this.dialogRef = this.dialog.open(ModalHomeComponent, {
        width: '450px'
      });
      this.dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.router.navigate(['confirmacao']);
        }
      });
    }


    openSim() {
      this.router.navigate(['questionario']);

    }
}
