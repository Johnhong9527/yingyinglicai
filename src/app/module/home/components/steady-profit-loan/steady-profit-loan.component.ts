import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steady-profit-loan',
  templateUrl: './steady-profit-loan.component.html',
  styleUrls: ['./steady-profit-loan.component.less']
})
export class SteadyProfitLoanComponent implements OnInit {
  @Input() title: string;
  @Input() pro_title: string;
  items: any;
  constructor() {}

  ngOnInit() {
    this.items = Array(8);

    for (var i = this.items.length - 1; i >= 0; i--) {
      this.items[i] = {
        name: `运力贷10${i * 23}号`,
        mAmount: 100,
        amount: (i + 1) * 1000,
        last: (i + 1) * 1000 - i * 2 * 100,
        interestRate: ((i + 1) / this.items.length) * 100,
        status: i < 3 ? 0 : 1,
        date: this.title === '盈宝系列' ? '360天' : '12个月'
      };
    }
  }
}
