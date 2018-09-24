import { Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
   { path: '', pathMatch: 'full', redirectTo: 'home' },
   {
     path: 'home',
     loadChildren: './home/home.module#HomeModule'
   },
  //  {
  //    path: 'questionario',
  //    loadChildren: './questionario/questionario.module#QuestionarioModule'
  //   }
]
}, {
  path: '',
  children: [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },

   {
     path: 'questionario',
     loadChildren: './questionario/questionario.module#QuestionarioModule'
    }
]
}
];
