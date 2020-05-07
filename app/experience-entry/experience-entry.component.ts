import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-entry',
  templateUrl: './experience-entry.component.html',
  styleUrls: ['./experience-entry.component.scss']
})
export class ExperienceEntryComponent {

  @Input() experiences;

}
