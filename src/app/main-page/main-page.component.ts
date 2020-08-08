import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  introContentList = [
                       `Hello! My name is Shruti Vellanki and I am a <strong>Front-End Developer</strong> living and working in <strong>Toronto, Canada</strong>. I like building beautiful and responsive User Interfaces that ensure a great User Experience. I am most interested in <strong>Human Computer Interaction</strong>, <strong>Web Accessibility</strong> and <strong>User Experience Design</strong>.`, 
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
              `Feature development working with a <strong>large agile software development team</strong> building an <strong>enterprise application with Angular</strong> (started with Angular 8, stayed the migration path to the latest version)`,
              `Involvement on team included using <strong>Typescript</strong>, <strong>HTML</strong>, <strong>SCSS</strong> and <strong>Angular</strong> in order to build an average of 2 major features per sprint`,
              `Reduced redundancies in the code base and maintained project consistency by creating <strong>reusable Angular components</strong> for UIs such as navigation bars and card widgets`,
              `Leveraged <strong>Apollo GraphQL</strong> in order to mock data which allowed for the rapid creation of functional UIs without waiting for the back-end to be developed`,
              `Supported the development of a process for building and validating features for <strong>accessibility compliance</strong> to <strong>WCAG level 2.1</strong> for the project`,
              `Tested for <strong>accessibility</strong> and <strong>cross-browser compatibility</strong> during development and code reviews by using a <strong>screen reader</strong>, <strong>aXe scans</strong> and <strong>BrowserStack</strong>`,
      ],
      skills: ['HTML', 'SCSS', 'Typescript', 'Angular', 'Apollo GraphQL', 'Karma', 'BrowserStack'],
    },
    {
      jobTitle: 'Front-End Developer',
      date: 'May 2018 - Aug 2019',
      company: 'Environment Canada',
      employmentType: 'Internship',
      list: [
            `Used <strong>Typescript</strong>, <strong>HTML</strong>, <strong>SCSS</strong>, <strong>AngularJS</strong> and the <strong>ArcGIS API</strong> to build a map integration that allows users to bookmark geographic areas as well as view relevant data about their bookmarked areas`,
            `Supported the development of a responsive datatable that supports user file uploads and URLs in a variety of formats (<strong>CSV</strong>, <strong>JSON</strong> and <strong>Shapefile</strong>) and presents the data in an interactive and easy-to-digest manner`,
            `Took initiative to document accessibility guidelines in order to ensure compliance with  <strong>WCAG level 2.0</strong>, which cut down QA reports of accessibility-related bugs in half`,
            `Wrote <strong>unit tests using Jasmine</strong> as well as <strong>UI tests using WebdriverIO</strong> to detect flaws in logic`,
      ],
      skills: ['HTML', 'SCSS', 'Typescript', 'AngularJS', 'WebdriverIO', 'Jasmine', 'ArcGIS API'],
    },
  ];

  
  projectsList = [
    {
      title: 'Data Table Integration',
      subtitle: 'Integration for Environment Canada\'s web map.',
      picture: '../../assets/enhancedTable/enhanced-table-slide-three.png',
      alt: 'A preview picture of Datagrid Integration',
      description: 'Built a bunch of shit',
      skills: ['ag-Grid API', 'SCSS', 'Typescript', 'Angular'],
      features: ['ag-Grid API', 'SCSS', 'Typescript', 'Angular'],
      slides: ['../../assets/enhancedTable/enhanced-table-slide-one.PNG', '../../assets/enhancedTable/enhanced-table-slide-three.png'],
      captions: ['caption 1', 'caption 3'],
      paragraphs: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      ]
    },
    {
      title: 'EconoGlobe',
      subtitle: 'Data viz of Economic Indicators for major cities.',
      picture: '../../assets/econoglobe/econoglobe-slide-1.png',
      alt: 'A preview picture of EconoGlobe',
      description: 'Built a bunch of shit Built a bunch of shit Built a bunch of shit',
      skills: ['HTML', 'CSS', 'Javascript', 'Google Maps API'],
      features: ['HTML', 'CSS', 'Javascript', 'Google Maps API'],
      slides: ['../../assets/econoglobe/econoglobe-slide-1.png', '../../assets/econoglobe/econoglobe-slide-2.PNG'],
      captions: ['caption 1', 'caption 2'],
      paragraphs: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      ]
    },
    {
      title: 'SnackHacks',
      subtitle: 'Design for an intelligent diet app.',
      picture: '../../assets/snackhacks/snackhacks-slide-one.png',
      alt: 'A preview picture of SnackHacks',
      description: 'Inspired by an Interaction Design Course.',
      skills: ['Figma', 'UX Design Principles'],
      features: ['Figma', 'UX Design Principles'],
      slides: ['../../assets/snackhacks/snackhacks-slide-one.png', '../../assets/snackhacks/snackhacks-slide-two.png', '../../assets/snackhacks/snackhacks-slide-three.png', '../../assets/snackhacks/snackhacks-slide-four.jpg', '../../assets/snackhacks/snackhacks-slide-five.png'],
      captions: ['caption 1', 'caption 2', 'caption 3', 'caption 4', 'caption 5'],
      paragraphs: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      ]
    },
    {
      title: 'Bookmarks Integration',
      subtitle: 'Integration for Environment Canada\'s web map.',
      picture: '../../assets/aoi/aoi-slide-2.png',
      alt: 'A preview picture of Android Store',
      caseStudyLink: 'XYZ Corp',
      description: 'Built a bunch of shit',
      skills: ['ArcGIS API', 'SCSS', 'Typescript', 'Angular'],
      features: ['ArcGIS API', 'SCSS', 'Typescript', 'Angular'],
      slides: ['../../assets/aoi/aoi-slide-2.png', '../../assets/aoi/aoi-slide-1.png', '../../assets/aoi/aoi-slide-3.png'],
      captions: ['caption one', 'caption 2', 'caption 3'],
      paragraphs: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      ]
    },
  ];

}
