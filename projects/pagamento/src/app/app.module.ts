import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DoneComponent } from './done/done.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DoneComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'pagamento',
        component: FormComponent
      },
      {
        path: 'pagamento/done',
        component: DoneComponent
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
  constructor(private injector:Injector){ }

  ngDoBootstrap(){
    const elem = createCustomElement(AppComponent, {injector: this.injector})
    customElements.define('micro-app-pagamento', elem);
  }
}
