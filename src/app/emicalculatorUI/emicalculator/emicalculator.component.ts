import { Component, OnInit } from '@angular/core';
import {EMICalculatorService} from "../../services/emicalculator.service";

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EMICalculatorComponent implements OnInit {

  amount: number = 0;
  months: number = 0;
  interestRate: number = 0;

  constructor(private _emiCalculatorService: EMICalculatorService) { }

  ngOnInit(): void {
  }

  calculateEMI(): void {
    this._emiCalculatorService.calculateEMI(this.amount, this.months, this.interestRate);
  }

  clear(): void {
    this.months = 0;
    this.amount = 0;
    this.interestRate = 0;
  }
}
