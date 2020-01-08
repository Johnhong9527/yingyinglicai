import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.less']
})
export class PageMenuComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
  goPage(path) {
    this.router.navigate([path]);
  }
}
