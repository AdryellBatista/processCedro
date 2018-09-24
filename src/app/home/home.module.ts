import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';

// import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home.component';
import { ModalHomeComponent } from './modalHome.component';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  entryComponents: [
    ModalHomeComponent
  ],
  declarations: [
    HomeComponent,
    ModalHomeComponent
  ]
})

export class HomeModule {}
