import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wyd-pro',
  templateUrl: './wyd-pro.component.html',
  styleUrls: ['./wyd-pro.component.less']
})
export class WydProComponent implements OnInit {
  @Input() wyd: any;
  @Input() last_title: string;
  last: number;
  constructor() {}

  ngOnInit() {
    this.last = Math.round((this.wyd.last / this.wyd.amount) * 10000) / 100;
    // this.last = (this.wyd.last / this.wyd.amount) * 100;
  }
}
