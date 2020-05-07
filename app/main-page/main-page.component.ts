import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  introContentList = [
                       `"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`, 
                        `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`];
  
  skillsList = [
    {
      title: 'Javascript',
      percentage: 49,
    },
    {
      title: 'HTML',
      percentage: 29,
    },
    {
      title: 'CSS',
      percentage: 95,
    },
    {
      title: 'Python',
      percentage: 10,
    }
  ];

  experienceList = [
    {
      jobTitle: 'Web Interface Engineer (Co-op)',
      date: 'Sep 2019 - Apr 2020',
      company: 'Intersect',
      list: [
              `Feature development working with a <b>large agile software development team</b> building an <b>enterprise application with Angular</b> (started with Angular 8, stayed the migration path to the latest version)`,
              `Involvement on team included using <b>Typescript</b>, <b>HTML</b>, <b>SCSS</b> and <b>Angular</b> in order to build an average of 2 major features per sprint`,
              `Reduced redundancies in the code base and maintained project consistency by creating <b>reusable Angular components</b> for UIs such as navigation bars and card widgets`,
              `Leveraged <b>Apollo GraphQL</b> in order to mock data which allowed for the rapid creation of functional UIs without waiting for the back-end to be developed`,
              `Supported the development of a process for building and validating features for <b>accessibility compliance</b> to <b>WCAG level 2.1</b> for the project`,
              `Tested for <b>accessibility</b> and <b>cross-browser compatibility</b> during development and code reviews by using a <b>screen reader</b>, <b>aXe scans</b> and <b>BrowserStack</b>`,
            ],
    },
    {
      jobTitle: 'Web Applications Developer (Co-op)',
      date: 'Jun. 2020 - Sept. 2021',
      company: 'Environment canada',
      list: [
            `Used <b>Typescript</b>, <b>HTML</b>, <b>SCSS</b>, <b>AngularJS</b> and the <b>ArcGIS API</b> to build a map integration that allows users to bookmark geographic areas as well as view relevant data about their bookmarked areas`,
            `Supported the development of a responsive datatable that supports user file uploads and URLs in a variety of formats (<b>CSV</b>, <b>JSON</b> and <b>Shapefile</b>) and presents the data in an interactive and easy-to-digest manner`,
            `Took initiative to document accessibility guidelines in order to ensure compliance with  <b>WCAG level 2.0</b>, which cut down QA reports of accessibility-related bugs in half`,
            `Wrote <b>unit tests using Jasmine</b> as well as <b>UI tests using WebdriverIO</b> to detect flaws in logic`,
      ],
    },
  ];

  
  projectsList = [
    {
      projectTitle: 'Econoglobe',
      picture: 'April 1st, 2020',
      demoLink: 'April 2nd 2020',
      caseStudyLink: 'XYZ Corp',
      description: 'Built a bunch of shit Built a bunch of shit Built a bunch of shit',
      skills: ['html', 'css', 'javascript'],
    },
    {
      projectTitle: 'Snack Hacks',
      picture: 'April 1st, 2020',
      demoLink: 'April 2nd 2020',
      caseStudyLink: 'XYZ Corp',
      description: 'Built a bunch of shit',
      skills: ['html', 'css', 'javascript'],
    },
    {
      projectTitle: 'Mood Diary',
      picture: 'April 1st, 2020',
      demoLink: 'April 2nd 2020',
      caseStudyLink: 'XYZ Corp',
      description: 'Built a bunch of shit',
      skills: ['html', 'css', 'javascript'],
    },
    {
      projectTitle: 'RAMP Datagrid',
      picture: 'April 1st, 2020',
      demoLink: 'April 2nd 2020',
      caseStudyLink: 'XYZ Corp',
      description: 'Built a bunch of shit',
      skills: ['html', 'css', 'javascript'],
    },
  ];

}
