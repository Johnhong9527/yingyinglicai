import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.less']
})
export class SwiperComponent implements OnInit {
  constructor() {}
  carousel: any = '';
  float: any = '';
  i: number = 0;
  lunboTime: any;
  ngOnInit() {}

  lunbo() {
    this.carousel = $('.carousel').children();
    $('.float-ul-li')
      .eq(this.i - 1)
      .css('opacity', 1)
      .siblings()
      .css('opacity', 0.5);
    $('.carousel > div')
      .eq(this.i - 1)
      .fadeIn('Slow')
      .siblings()
      .fadeOut('Slow');
    if (this.i < $('.float-ul-li').length) {
      this.i++;
    } else {
      this.i = 0;
    }
  }
  ngAfterViewInit() {
    var self = this;
    self.lunbo();
    self.lunboTime = setInterval(self.lunbo, 1500);
    $('.float-ul-li').map((index, el) => {
      $(el)[0].onmouseover = function() {
        clearInterval(self.lunboTime);
        self.i = Number.parseInt($(this).text());
        self.lunbo();
      };
      $(el)[0].onmouseout = function() {
        self.lunboTime = setInterval(self.lunbo, 1500);
      };
    });
  }
}
