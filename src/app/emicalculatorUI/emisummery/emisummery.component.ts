import { Component, OnInit } from '@angular/core';
import {EMICalculatorService} from "../../services/emicalculator.service";

@Component({
  selector: 'app-emisummery',
  templateUrl: './emisummery.component.html',
  styleUrls: ['./emisummery.component.css']
})
export class EMISummeryComponent implements OnInit {

  monthlyInterest: number = 0;
  totalInterest: number = 0;
  totalAmount: number = 0;
  constructor(private _emiCalculateService: EMICalculatorService) { }

  ngOnInit(): void {
    this._emiCalculateService.getObservableRef().subscribe(data => {
      this.monthlyInterest = data['monthlyEMI'];
      this.totalInterest = data['totalInterest'];
      this.totalAmount = data['totalAmount'];
    })
  }



}
