import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  n1: number = 0;
  n2: number = 0;
  sum: number = 0;

  add() {
    this.sum = this.n1 + this.n2;
  }

  reset() {
    this.n1 = 0;
    this.n2 = 0;
    this.sum = 0;
  }
}
