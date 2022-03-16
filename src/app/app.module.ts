import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {EMICalculatorUIModule} from "./emicalculatorUI/emicalculator-ui.module";
import {EMICalculatorService} from "./services/emicalculator.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        EMICalculatorUIModule
    ],
  providers: [{
    provide: EMICalculatorService,
    useClass: EMICalculatorService
  }],
  bootstrap: [AppComponent],

})
export class AppModule { }
