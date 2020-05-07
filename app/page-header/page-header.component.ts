import { Component, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements AfterViewInit {
  @ViewChild('snav') sidenav: any;

  ngAfterViewInit() {
    console.log(this.sidenav);
  }

  get opened() {
    return this.sidenav && this.sidenav.opened;
  }
}
