import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ExtratoListComponent } from './extrato-list/extrato-list.component';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtratoListComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'extrato',
        component: ExtratoListComponent
      },
      {
        path: '**',
        component: EmptyComponent
      }
    ], {useHash: true})
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  constructor(private injector:Injector){}

  ngDoBootstrap(){
    const elem = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define('micro-app-extrato', elem);
  }
}
