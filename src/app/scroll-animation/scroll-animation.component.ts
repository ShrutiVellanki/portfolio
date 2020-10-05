import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-animation',
  templateUrl: './scroll-animation.component.html',
  styleUrls: ['./scroll-animation.component.scss']
})
export class ScrollAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToView(element) {
    const scrollToEl = document.querySelector(element);
    const headerHeight = 50;
    const buffer = 25;
  
    const topOfElement = window.pageYOffset + scrollToEl.getBoundingClientRect().top - headerHeight - buffer;

    window.scroll({
      top: topOfElement,
      behavior: 'smooth' 
    });
  }

}
