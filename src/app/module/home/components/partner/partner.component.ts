import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.less']
})
export class PartnerComponent implements OnInit {
  imgs: any;
  uls: any;
  lis: any;
  ulsWidth: number = 0;
  leftnum: number = 0;
  constructor() {}
  ngOnInit() {
    this.imgs = Array(7);
    for (var i = this.imgs.length - 1; i >= 0; i--) {
      this.imgs[i] = {
        url: `https://i.yingyinglicai.com/frontweb_bak_201907/theme/imagesnew/${i +
          1}.jpg`,
        link: 'https://www.yingyinglicai.com/about/about3.htm?index=6'
      };
    }
  }
  left() {
    if (this.ulsWidth / 220 - (Math.abs(this.leftnum) / 220 + 1) > 3) {
      this.leftnum -= 220;
    } else {
      this.leftnum = 0;
    }
    this.uls.animate({ left: this.leftnum + 'px' }, 300, 'swing');
  }
  right() {
    if (this.leftnum < 0) {
      this.leftnum += 220;
    } else if (this.leftnum == 0) {
      this.leftnum = -Math.abs(this.ulsWidth - 880);
    }
    if (this.leftnum > 0) {
      this.leftnum = 0;
    }
    this.uls.animate({ left: this.leftnum + 'px' }, 300, 'swing');
  }
  ngAfterViewInit() {
    this.uls = $('.about-company .imgs');
    this.lis = $('.about-company a');
    this.ulsWidth = this.lis.length * 220;
    this.uls.width(this.ulsWidth);
  }
}
