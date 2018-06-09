import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AComponent } from '../../components/a/a.component';
import { BComponent } from '../../components/b/b.component';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';

// all of our soon-to-be routes!
const routes: Routes = [
  {
    path: 'A',
    component: AComponent
  },
  {
    path: 'B',
    component: BComponent
  },
  {
    path: '',
    redirectTo: 'A',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
