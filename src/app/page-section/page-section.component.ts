import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.scss']
})
export class PageSectionComponent implements OnInit {

  @Input() header;
  
  constructor() { }

  ngOnInit(): void {
  }

}
