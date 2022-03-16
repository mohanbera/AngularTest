import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMICalculatorComponent } from './emicalculator/emicalculator.component';
import { EMISummeryComponent } from './emisummery/emisummery.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    EMICalculatorComponent,
    EMISummeryComponent
  ],
  exports: [
    EMICalculatorComponent,
    EMISummeryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EMICalculatorUIModule { }
