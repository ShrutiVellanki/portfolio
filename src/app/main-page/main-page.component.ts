import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  introContentList = [
                       `Hello! My name is Shruti Vellanki and I am a Front-End Developer living and working in Toronto, Canada. I like building beautiful and responsive User Interfaces that ensure a great User Experience. I am most interested in Human Computer Interaction, Web Accessibility and User Experience Design.`, 
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
      title: 'Vue.js and Vuex',
      percentage: 70,
    },
    {
      title: 'Apollo GraphQL',
      percentage: 45,
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
              `Worked  on a two-person front end team to help <strong>revamp a large legacy windows application</strong>  (a ticketing system that grants authorization to users and organizations on Environment Canada’s portal) by <strong>converting it to a modern, easy-to-use web application</strong>`,
              `Leveraged <strong>Vue.js</strong>, <strong>Vuex</strong>, <strong>Bulma</strong> (CSS framework) as well as <strong>Apollo GraphQL</strong>`,
              `Took initiative by <strong>making major technical decisions</strong> such as researching, justifying and demonstrating the merits of Apollo GraphQL on the client-side (vs. other GraphQL clients) and eventually ended up <strong>shaping a large chunk of the project structure</strong>`,
              `Followed <strong>best-practices</strong> ensuring all UI components are <strong>mobile responsive</strong> and <strong>accessible</strong> with all text content <strong>internationalized (i18n)</strong>`,
              `Helped the backend team <strong>define API structure</strong> and made UI components functional by writing client-side GraphQL schemas and test data `
            ],
      skills: [`Vue.js`, `Vuex`, `Apollo GraphQL`, `Bulma`, `HTML`, `SCSS`],
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
      title: 'Datagrid Map Integration',
      subtitle: 'Web Mapping Team - Environment Canada',
      content: ['When there are lots of points on a map it becomes hard for a user to zoom and click their way into finding the details that they need. I helped develop this datagrid map integration as a solution.', 'It provides a comprehensive overview of all map points, allowing the user to filter, export, and interact with map data as needed.'],
      picture: '../../assets/enhancedTable/enhanced-table-slide-three.png',
      alt: 'A preview picture of Datagrid Integration',
      description: 'Built a bunch of shit',
      skills: ['ag-Grid API', 'SCSS', 'Typescript', 'Angular'],
      features: ['ag-Grid API', 'SCSS', 'Typescript', 'Angular'],
      slides: ['../../assets/enhancedTable/enhanced-table-slide-one.PNG', '../../assets/enhancedTable/enhanced-table-slide-three.png'],
      captions: [
                'Clicking on the Nuclear powerplants layer opens up a datagrid displaying all the nuclear powerplants on the map. Each row corresponds to a powerplant and gives the user the option to zoom into its corresponding point on the map. Each column can be filtered and sorted.', 
                'The datagrid has a built in menu which provides options to adjust display settings, pick advanced filtering options, and to export data.'
              ],
      paragraphs: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      ]
    },
    {
      title: 'EconoGlobe',
      subtitle: 'Personal Project',
      content: ['How do different parts of the world compare when it comes to GDP, unemployment rates and rent prices? When I  stumbled upon the Teleport API that provided this sort of data for over 200 cities around the world, I knew it was time for a personal project.', 'The result is a data visualization (it leverages Google Maps!) of 5 economic indicators - simply hover over each city to learn more.'],
      picture: '../../assets/econoglobe/econoglobe-slide-1.png',
      alt: 'A preview picture of EconoGlobe',
      description: 'Built a bunch of shit Built a bunch of shit Built a bunch of shit',
      skills: ['HTML', 'CSS', 'Javascript', 'Google Maps API'],
      features: ['HTML', 'CSS', 'Javascript', 'Google Maps API'],
      slides: ['../../assets/econoglobe/econoglobe-slide-1.png', '../../assets/econoglobe/econoglobe-slide-2.PNG'],
      captions: ['Hovering over a city displays the name of the city followed by relevant data about it (rent prices in this case).', 'A dropdown menu above the map lets users pick between different economic indicators for each city.'],
      paragraphs: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      ]
    },
    {
      title: 'SnackHacks',
      subtitle: 'Personal Project',
      content: ['During a fitness-obsessed phase, I found myself wishing that there was a platform that combined the calorie tracking capabilities MyFitnessPal, the recipe saving capabilities of AllRecipes, and the fitness community on Reddit.', 'I also wanted to put my Interaction Design skills to the test so it only made sense to create SnackHacks - a design for an app that combined food, fitness and community.'],
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
      title: 'Bookmarks Plugin',
      subtitle: 'Web Mapping Team - Environment Canada',
      content: ['When I worked as a developer on  Environment Canada’s web mapping team, a client thought it would be handy to have a way to create custom maps with “bookmarked” areas.', 'I was tasked with creating a Bookmarks Plugin which extended our mapping platform to allow users to easily access and view their areas of interest.'],
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
