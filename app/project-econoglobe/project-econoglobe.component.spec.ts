import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEconoglobeComponent } from './project-econoglobe.component';

describe('ProjectEconoglobeComponent', () => {
  let component: ProjectEconoglobeComponent;
  let fixture: ComponentFixture<ProjectEconoglobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEconoglobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEconoglobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
