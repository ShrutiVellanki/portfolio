import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.scss']
})
export class SkillsBarComponent implements OnInit {

  @Input() skills;

  ngOnInit() {
    // window.addEventListener('load', () => {
    window.addEventListener('scroll', () => {
        const element = document.getElementsByClassName('skills-bar-wrapper')[0];  
        if (element && this.isInViewport(element)) {
          $(".mat-progress-bar").each(function(){
            $(this).find(".bar-inner").animate({
              width: $(this).attr("data-width")
            },3000)
          });
        }
   });
  }

  isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;

    return (
      rect.top >= -300 &&
      rect.top <= 1000 &&
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

}
