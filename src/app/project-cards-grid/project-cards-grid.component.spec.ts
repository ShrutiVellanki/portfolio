import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardsGridComponent } from './project-cards-grid.component';

describe('ProjectCardsGridComponent', () => {
  let component: ProjectCardsGridComponent;
  let fixture: ComponentFixture<ProjectCardsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCardsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
