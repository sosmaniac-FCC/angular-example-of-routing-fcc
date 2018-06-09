import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule, // routing feature module
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
