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
    document.getElementById
  }

  get opened() {
    return this.sidenav && this.sidenav.opened;
  }

  scrollToView(element, closeSideNav = false) {
    const scrollToEl = document.querySelector(element);
    const headerHeight = 50;
    const buffer = 25;
  
    const topOfElement = window.pageYOffset + scrollToEl.getBoundingClientRect().top - headerHeight - buffer;

    window.scroll({
      top: topOfElement,
      behavior: 'smooth' 
    });

    if (closeSideNav) {
      this.sidenav.toggle();
    }
  }

  get introInView() {
    const intro = document.getElementById('intro').children[0];
    const skills = document.getElementById('skills').children[0];
    return this.inViewPort(intro) && !this.inViewPort(skills);
  }

  get elementsExist() {
    return document.getElementById('intro') !== null && 
          document.getElementById('skills') !== null &&
          document.getElementById('experience') !== null &&
          document.getElementById('projects') !== null &&
          document.getElementById('contact') !== null;
  }

  get skillsInView() {
    const skills = document.getElementById('skills').children[0];
    const experience = document.getElementById('experience').children[0];

    return this.inViewPort(skills) && !this.inViewPort(experience);
  }

  get experienceInView() {
    const projects = document.getElementById('projects').children[0];
    const experience = document.getElementById('experience').children[0];

    return this.inViewPort(experience) && !this.inViewPort(projects);
  }

  get projectsInView() {
    const projects = document.getElementById('projects').children[0];
    const contact = document.getElementById('contact').children[0];

    return this.inViewPort(projects) && !this.inViewPort(contact);
  }

  get contactInView() {
    const contact = document.getElementById('contact').children[0];

    return this.inViewPort(contact);
  }

  inViewPort(element) {
    const bounding = element.getBoundingClientRect();
    return bounding.top <= 100;
  }
}
