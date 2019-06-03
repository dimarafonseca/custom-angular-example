import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ButtonComponent],
  providers: []
})


export class AppModule {
  
  private injector: Injector;

  constructor(injector: Injector) {
    this.injector = injector;
  }

  public ngDoBootstrap() {

    const button = createCustomElement(ButtonComponent, { injector: this.injector });

    if (!customElements.get('app-button')) {

      customElements.define('app-button', button);

    }

  }

}
