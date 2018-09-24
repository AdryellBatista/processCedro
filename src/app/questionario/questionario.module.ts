import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';

// import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionarioComponent } from './questionario.component';
import { QuestionarioRoutes } from './questionario.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QuestionarioRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  declarations: [
    QuestionarioComponent
  ]
})

export class QuestionarioModule {}
