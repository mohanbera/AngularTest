import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EMICalculatorService {

  monthlyEMI: number = 0;
  totalInterest: number = 0;
  totalAmount: number = 0;

  constructor() { }

  getMonthlyEMI() {
    return this.monthlyEMI;
  }
  getTotalInterest() {
    return this.totalInterest;
  }
  getTotalAmount() {
    return this.totalAmount;
  }
  calculateEMI(amount: number, months: number, interestRate: number): void {
    this.monthlyEMI = (amount*interestRate)/100;
    this.totalInterest = (amount*months*interestRate)/100;
    this.totalAmount = this.totalInterest + amount;
    console.log('the values are '+this.monthlyEMI+' '+this.totalInterest+' '+this.totalAmount);
  }
}
