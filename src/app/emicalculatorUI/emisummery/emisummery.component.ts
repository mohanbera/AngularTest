import { Component, OnInit } from '@angular/core';
import {EMICalculatorService} from "../../services/emicalculator.service";

@Component({
  selector: 'app-emisummery',
  templateUrl: './emisummery.component.html',
  styleUrls: ['./emisummery.component.css']
})
export class EMISummeryComponent implements OnInit {

  constructor(private _emiCalculateService: EMICalculatorService) { }

  ngOnInit(): void {
  }

  getMonthlyAmount(): number {
    return this._emiCalculateService.getMonthlyEMI();
  }

  getTotalInterst(): number {
    return this._emiCalculateService.getTotalInterest();
  }

  getTotalAmount(): number {
    return this._emiCalculateService.getTotalAmount();
  }
}
