import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-modules/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageSectionComponent } from './page-section/page-section.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageNavComponent } from './page-nav/page-nav.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeroComponent } from './page-hero/page-hero.component';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { SkillsBarComponent } from './skills-bar/skills-bar.component';
import { ProjectTitleComponent } from './project-title/project-title.component';
import { ProjectSkillsTagsComponent } from './project-skills-tags/project-skills-tags.component';
import { ProjectCardsGridComponent } from './project-cards-grid/project-cards-grid.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectEconoglobeComponent } from './project-econoglobe/project-econoglobe.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { ExperienceEntryComponent } from './experience-entry/experience-entry.component';
import { CommonModule } from '@angular/common';
// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
@NgModule({
  declarations: [
    AppComponent,
    PageSectionComponent,
    PageHeaderComponent,
    PageNavComponent,
    PageFooterComponent,
    PageHeroComponent,
    ProjectCardsComponent,
    SkillsBarComponent,
    ProjectTitleComponent,
    ProjectSkillsTagsComponent,
    ProjectCardsGridComponent,
    MainPageComponent,
    ProjectPageComponent,
    ProjectEconoglobeComponent,
    routingComponents,
    StyleGuideComponent,
    ExperienceEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */