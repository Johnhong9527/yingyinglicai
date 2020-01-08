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
  self: any;
  ngOnInit() {}

  lunbo() {
    this.carousel = $('.carousel').children();
    $('.float')
      .children()
      .children('li')
      .eq(this.i - 1)
      .css('opacity', 1)
      .siblings()
      .css('opacity', 0.5);
    $(this.carousel[this.i])
      .children()
      .fadeIn('Slow');
    $(this.carousel[this.i])
      .siblings()
      .children()
      .fadeOut('Slow');
    if (this.i < 3) {
      this.i++;
    } else {
      this.i = 0;
    }
  }
  ngAfterViewInit() {
    self = this;
    // console.log(this); onmouseover
    this.lunbo();
    this.lunboTime = setInterval(this.lunbo, 2000);
    $('.float-ul-li').map((index, el) => {
      console.log();
      $(el)[0].onmouseover = function() {
        console.log(self);
        // i = this.innerText;
        // carousel = $('.carousel').children();
        // $(carousel[i])
        //   .children()
        //   .fadeIn('Slow');
        // $(carousel[i])
        //   .siblings()
        //   .children()
        //   .fadeOut('Slow');
        // $(float)
        //   .children('li')
        //   .eq(i - 1)
        //   .css('opacity', 1)
        //   .siblings()
        //   .css('opacity', 0.5);
      };
    });
    // console.log($('.float-ul-li'));
  }
}
