import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  news: any;
  constructor() {}

  ngOnInit() {
    this.news = Array(5);
    for (var i = this.news.length - 1; i >= 0; i--) {
      this.news[i] = {
        name: '盈盈理财出席Money20/20中国大会，金融科技毅力前行',
        link:
          'https://www.yingyinglicai.com/news/newsDetail.htm?id=266&type=NEW',
        date: '2018-11-16'
      };
    }
  }
}
