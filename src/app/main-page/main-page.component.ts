import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  introContentList = [
                       `Hello! My name is Shruti Vellanki and I am a <b>Front-End Developer</b> living and working in <b>Toronto, Canada</b>. I like building beautiful and responsive User Interfaces that ensure a great User Experience. I am most interested in <b>Human Computer Interaction</b>, <b>Web Accessibility</b> and <b>User Experience Design</b>.`, 
                        `In my free time you can find me learning about psychology, playing board games with friends, biking, or trying out a new recipe!`];
  
  skillsList = [
    {
      title: 'Javascript (ES6) and Typescript',
      percentage: 95,
    },
    {
      title: 'CSS and SCSS',
      percentage: 95,
    },
    {
      title: 'Git',
      percentage: 90,
    }, 
    {
      title: 'Chrome DevTools',
      percentage: 85,
    },
    {
      title: 'BrowserStack',
      percentage: 80,
    }, 
    {
      title: 'Angular and AngularJS',
      percentage: 75,
    },
    {
      title: 'Python',
      percentage: 50,
    },
    {
      title: 'Java',
      percentage: 40,
    },
    {
      title: 'Apollo GraphQL',
      percentage: 25,
    },  
    {
      title: 'Sketch and Figma',
      percentage: 15,
    },    
  ];

  experienceList = [
    {
      jobTitle: 'Front-End Developer',
      date: 'Jun 2020 - Present',
      company: 'Environment Canada',
      employmentType: 'Full Time',
      list: [
              `I just started this job! Check out other sections for more detailed descriptions.`,
      ],
      skills: [],
    },
    {
      jobTitle: 'Web Interface Engineer',
      date: 'Sep 2019 - Apr 2020',
      company: 'Intersect',
      employmentType: 'Internship',
      list: [
              `Feature development working with a <b>large agile software development team</b> building an <b>enterprise application with Angular</b> (started with Angular 8, stayed the migration path to the latest version)`,
              `Involvement on team included using <b>Typescript</b>, <b>HTML</b>, <b>SCSS</b> and <b>Angular</b> in order to build an average of 2 major features per sprint`,
              `Reduced redundancies in the code base and maintained project consistency by creating <b>reusable Angular components</b> for UIs such as navigation bars and card widgets`,
              `Leveraged <b>Apollo GraphQL</b> in order to mock data which allowed for the rapid creation of functional UIs without waiting for the back-end to be developed`,
              `Supported the development of a process for building and validating features for <b>accessibility compliance</b> to <b>WCAG level 2.1</b> for the project`,
              `Tested for <b>accessibility</b> and <b>cross-browser compatibility</b> during development and code reviews by using a <b>screen reader</b>, <b>aXe scans</b> and <b>BrowserStack</b>`,
      ],
      skills: ['HTML', 'SCSS', 'Typescript', 'Angular', 'Apollo GraphQL', 'Karma', 'BrowserStack'],
    },
    {
      jobTitle: 'Front-End Developer',
      date: 'May 2018 - Aug 2019',
      company: 'Environment Canada',
      employmentType: 'Internship',
      list: [
            `Used <b>Typescript</b>, <b>HTML</b>, <b>SCSS</b>, <b>AngularJS</b> and the <b>ArcGIS API</b> to build a map integration that allows users to bookmark geographic areas as well as view relevant data about their bookmarked areas`,
            `Supported the development of a responsive datatable that supports user file uploads and URLs in a variety of formats (<b>CSV</b>, <b>JSON</b> and <b>Shapefile</b>) and presents the data in an interactive and easy-to-digest manner`,
            `Took initiative to document accessibility guidelines in order to ensure compliance with  <b>WCAG level 2.0</b>, which cut down QA reports of accessibility-related bugs in half`,
            `Wrote <b>unit tests using Jasmine</b> as well as <b>UI tests using WebdriverIO</b> to detect flaws in logic`,
      ],
      skills: ['HTML', 'SCSS', 'Typescript', 'AngularJS', 'WebdriverIO', 'Jasmine', 'ArcGIS API'],
    },
  ];

  
  projectsList = [
    {
      projectTitle: 'Econoglobe',
      picture: 'econoglobe',
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
