import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.less']
})
export class OutcomeComponent implements OnInit {
  // 还款通告:Repayment notice
  rN: any;
  constructor() {}

  ngOnInit() {
    this.rN = [
      {
        name: '季盈宝4307号',
        value: 16166.41
      },
      {
        name: '季盈宝4303号',
        value: 10777.61
      },
      {
        name: '季盈宝4282号',
        value: 15095.78
      },
      {
        name: '季盈宝4262号',
        value: 47142.7
      }
    ];
  }
}
