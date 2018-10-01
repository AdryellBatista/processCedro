import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { HttpClientModule,
         HttpClient              } from '@angular/common/http';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SpinnerComponent } from './shared/spinner.component';
import { QuestionsServices } from './services/questions.services';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LayoutComponent
  ],
  imports: [
  //  CommonModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    MatGridListModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
    // FlexLayoutModule
  ],
  providers: [
    QuestionsServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
