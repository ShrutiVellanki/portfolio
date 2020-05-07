import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-cards-grid',
  templateUrl: './project-cards-grid.component.html',
  styleUrls: ['./project-cards-grid.component.scss']
})
export class ProjectCardsGridComponent {

  @Input() projects;
  pairs = [];

  get projectPairs() {
    while(this.projects.length) this.pairs.push(this.projects.splice(0,2));
    return this.pairs;
  }
}
