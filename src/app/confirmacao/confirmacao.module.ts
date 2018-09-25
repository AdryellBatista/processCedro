import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


// import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmacaoComponent } from './confirmacao.component';
import { ConfirmacaoRoutes } from './confirmacao.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ConfirmacaoRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule
  ],
  declarations: [
    ConfirmacaoComponent
  ]
})

export class ConfirmacaoModule {}
