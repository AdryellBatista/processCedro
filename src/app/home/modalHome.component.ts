import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTable} from '@angular/material';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template: `
  <h1 mat-dialog-title style="color: #8fc74b;">
    Termo
  </h1>
  <div mat-dialog-content style="color: #2f4e78; font-family: Open Sans">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
     nulla pariatur. Excepteur sint
     occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    <div style="margin-top: 30px; font-size: 12px;">
      <mat-checkbox (click)="ativa()">Li e aceito os termos e condições acima</mat-checkbox>
    </div>
  </div>
  <div mat-dialog-actions class="text-center" style="color: #8fc74b;">
    <button mat-button [mat-dialog-close]="true" tabindex="2" [disabled]="ativaOk">Ok, Entendi</button>
  </div>
`
})
export class ModalHomeComponent {
  ativaOk = true;
  constructor(
    public dialogRef: MatDialogRef<ModalHomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ativa() {
    this.ativaOk = !this.ativaOk;
  }
}
