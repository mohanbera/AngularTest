import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EMICalculatorService {

  private subject = new Subject<any>();
  monthlyEMI: number = 0;
  totalInterest: number = 0;
  totalAmount: number = 0;

  constructor() { }

  // getMonthlyEMI() {
  //   return this.monthlyEMI;
  // }
  // getTotalInterest() {
  //   return this.totalInterest;
  // }
  // getTotalAmount() {
  //   return this.totalAmount;
  // }
  calculateEMI(amount: number, months: number, interestRate: number): void {
    this.monthlyEMI = (amount*interestRate)/100;
    this.totalInterest = (amount*months*interestRate)/100;
    this.totalAmount = this.totalInterest + amount;
    console.log('the values are '+this.monthlyEMI+' '+this.totalInterest+' '+this.totalAmount);
    const obj = {'monthlyEMI': this.monthlyEMI, 'totalInterest': this.totalInterest, 'totalAmount': this.totalAmount};
    this.subject.next(obj);
  }

  getObservableRef(){
    return this.subject.asObservable();
  }
}
