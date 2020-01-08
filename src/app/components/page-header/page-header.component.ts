import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.less']
})
export class PageHeaderComponent implements OnInit {
  constructor(public activatedRoute: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    // console.log(this);
  }
  goPage(path) {
    this.router.navigate([path]);
  }
}
