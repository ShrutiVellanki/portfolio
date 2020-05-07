import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.scss']
})
export class SkillsBarComponent {

  @Input() skills;

}
