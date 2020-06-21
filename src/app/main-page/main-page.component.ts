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
      picture: '../../assets/enhancedtable.PNG',
      alt: 'A preview picture of Datagrid Integration',
      description: 'Built a bunch of shit',
      skills: ['ag-Grid API', 'SCSS', 'Typescript', 'Angular'],
      features: ['ag-Grid API', 'SCSS', 'Typescript', 'Angular'],
      paragraphs: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a blandit nulla. Sed faucibus lorem vel sapien aliquam commodo. Fusce diam massa, gravida et vulputate in, pretium sit amet mauris. Praesent interdum consectetur tellus vel hendrerit. In at odio eget neque malesuada venenatis at non ligula. Nulla ultrices, metus non fringilla euismod, ipsum velit cursus nibh, sollicitudin vestibulum nunc nulla id mi. Duis laoreet felis vel odio molestie, eget vestibulum neque dictum. Curabitur eu scelerisque magna.

      Curabitur mattis tempus metus sit amet luctus. Donec efficitur risus eget lectus elementum, ac mattis turpis ornare. Curabitur aliquam orci ligula, ac commodo urna pellentesque quis. Nulla facilisi. Nam auctor urna arcu, nec vulputate nisi congue sit amet. Fusce hendrerit ipsum in vehicula venenatis. Pellentesque urna ante, convallis at interdum et, sagittis feugiat nunc. Praesent mollis lacus metus, eu aliquam massa bibendum a. Fusce interdum metus id ante convallis, eu facilisis orci ultricies. Nunc nec tincidunt purus. Maecenas maximus posuere justo vitae blandit. Nam convallis efficitur augue, quis condimentum velit bibendum in. Quisque tortor odio, ullamcorper a ornare et, hendrerit a elit.
      
      Nulla in augue tincidunt, ultrices massa a, mattis enim. Curabitur eget blandit massa. Etiam quis luctus ante, ut dapibus libero. Nunc vitae orci in leo euismod efficitur. Etiam efficitur, orci in dictum vestibulum, ipsum dolor varius ex, sit amet elementum sem orci a arcu. In eros lectus, molestie eget tincidunt ut, malesuada et felis. Pellentesque justo justo, faucibus vel eros eget, efficitur mollis nunc. Phasellus porta auctor semper. Curabitur quis cursus enim. Cras dapibus ultrices tortor nec luctus.
      
      Duis fermentum diam ipsum, in pharetra elit iaculis quis. Nullam vel pellentesque sem, id tristique erat. Sed auctor dolor ut tempor mollis. Ut malesuada, justo in bibendum tristique, urna enim vestibulum orci, vel cursus augue turpis a urna. Aliquam risus diam, varius sit amet condimentum et, suscipit vitae tortor. Donec ac fermentum turpis. Aliquam ut nisi euismod, pretium nibh eu, volutpat nisl. Phasellus eu ex ut tortor sagittis mollis non eu metus. Proin non odio ultrices, imperdiet arcu nec, commodo elit. Aenean sed felis condimentum, tincidunt mi vel, finibus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      
      Vivamus ultricies lacus in turpis congue, vitae bibendum ante scelerisque. Praesent sit amet aliquet enim. Ut faucibus libero non ipsum vulputate dictum. Etiam congue sem purus, laoreet porta orci rutrum interdum. Pellentesque tristique sollicitudin luctus. Praesent vehicula rutrum pretium. Vestibulum elementum sed odio ut hendrerit. Duis facilisis, sem ac maximus fermentum, enim justo ornare felis, cursus porta erat lorem et est.`
    },
    {
      title: 'EconoGlobe',
      subtitle: 'Data viz of Economic Indicators for major cities.',
      picture: '../../assets/econoglobe.png',
      alt: 'A preview picture of EconoGlobe',
      description: 'Built a bunch of shit Built a bunch of shit Built a bunch of shit',
      skills: ['HTML', 'CSS', 'Javascript', 'Google Maps API'],
      features: ['HTML', 'CSS', 'Javascript', 'Google Maps API'],
      paragraphs: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a blandit nulla. Sed faucibus lorem vel sapien aliquam commodo. Fusce diam massa, gravida et vulputate in, pretium sit amet mauris. Praesent interdum consectetur tellus vel hendrerit. In at odio eget neque malesuada venenatis at non ligula. Nulla ultrices, metus non fringilla euismod, ipsum velit cursus nibh, sollicitudin vestibulum nunc nulla id mi. Duis laoreet felis vel odio molestie, eget vestibulum neque dictum. Curabitur eu scelerisque magna.

      Curabitur mattis tempus metus sit amet luctus. Donec efficitur risus eget lectus elementum, ac mattis turpis ornare. Curabitur aliquam orci ligula, ac commodo urna pellentesque quis. Nulla facilisi. Nam auctor urna arcu, nec vulputate nisi congue sit amet. Fusce hendrerit ipsum in vehicula venenatis. Pellentesque urna ante, convallis at interdum et, sagittis feugiat nunc. Praesent mollis lacus metus, eu aliquam massa bibendum a. Fusce interdum metus id ante convallis, eu facilisis orci ultricies. Nunc nec tincidunt purus. Maecenas maximus posuere justo vitae blandit. Nam convallis efficitur augue, quis condimentum velit bibendum in. Quisque tortor odio, ullamcorper a ornare et, hendrerit a elit.
      
      Nulla in augue tincidunt, ultrices massa a, mattis enim. Curabitur eget blandit massa. Etiam quis luctus ante, ut dapibus libero. Nunc vitae orci in leo euismod efficitur. Etiam efficitur, orci in dictum vestibulum, ipsum dolor varius ex, sit amet elementum sem orci a arcu. In eros lectus, molestie eget tincidunt ut, malesuada et felis. Pellentesque justo justo, faucibus vel eros eget, efficitur mollis nunc. Phasellus porta auctor semper. Curabitur quis cursus enim. Cras dapibus ultrices tortor nec luctus.
      
      Duis fermentum diam ipsum, in pharetra elit iaculis quis. Nullam vel pellentesque sem, id tristique erat. Sed auctor dolor ut tempor mollis. Ut malesuada, justo in bibendum tristique, urna enim vestibulum orci, vel cursus augue turpis a urna. Aliquam risus diam, varius sit amet condimentum et, suscipit vitae tortor. Donec ac fermentum turpis. Aliquam ut nisi euismod, pretium nibh eu, volutpat nisl. Phasellus eu ex ut tortor sagittis mollis non eu metus. Proin non odio ultrices, imperdiet arcu nec, commodo elit. Aenean sed felis condimentum, tincidunt mi vel, finibus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      
      Vivamus ultricies lacus in turpis congue, vitae bibendum ante scelerisque. Praesent sit amet aliquet enim. Ut faucibus libero non ipsum vulputate dictum. Etiam congue sem purus, laoreet porta orci rutrum interdum. Pellentesque tristique sollicitudin luctus. Praesent vehicula rutrum pretium. Vestibulum elementum sed odio ut hendrerit. Duis facilisis, sem ac maximus fermentum, enim justo ornare felis, cursus porta erat lorem et est.`
    },
    {
      title: 'SnackHacks',
      subtitle: 'Design for an intelligent diet app.',
      picture: '../../assets/snackhacks.png',
      alt: 'A preview picture of SnackHacks',
      description: 'Inspired by an Interaction Design Course.',
      skills: ['Figma', 'UX Design Principles'],
      features: ['Figma', 'UX Design Principles'],
      paragraphs: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a blandit nulla. Sed faucibus lorem vel sapien aliquam commodo. Fusce diam massa, gravida et vulputate in, pretium sit amet mauris. Praesent interdum consectetur tellus vel hendrerit. In at odio eget neque malesuada venenatis at non ligula. Nulla ultrices, metus non fringilla euismod, ipsum velit cursus nibh, sollicitudin vestibulum nunc nulla id mi. Duis laoreet felis vel odio molestie, eget vestibulum neque dictum. Curabitur eu scelerisque magna.

      Curabitur mattis tempus metus sit amet luctus. Donec efficitur risus eget lectus elementum, ac mattis turpis ornare. Curabitur aliquam orci ligula, ac commodo urna pellentesque quis. Nulla facilisi. Nam auctor urna arcu, nec vulputate nisi congue sit amet. Fusce hendrerit ipsum in vehicula venenatis. Pellentesque urna ante, convallis at interdum et, sagittis feugiat nunc. Praesent mollis lacus metus, eu aliquam massa bibendum a. Fusce interdum metus id ante convallis, eu facilisis orci ultricies. Nunc nec tincidunt purus. Maecenas maximus posuere justo vitae blandit. Nam convallis efficitur augue, quis condimentum velit bibendum in. Quisque tortor odio, ullamcorper a ornare et, hendrerit a elit.
      
      Nulla in augue tincidunt, ultrices massa a, mattis enim. Curabitur eget blandit massa. Etiam quis luctus ante, ut dapibus libero. Nunc vitae orci in leo euismod efficitur. Etiam efficitur, orci in dictum vestibulum, ipsum dolor varius ex, sit amet elementum sem orci a arcu. In eros lectus, molestie eget tincidunt ut, malesuada et felis. Pellentesque justo justo, faucibus vel eros eget, efficitur mollis nunc. Phasellus porta auctor semper. Curabitur quis cursus enim. Cras dapibus ultrices tortor nec luctus.
      
      Duis fermentum diam ipsum, in pharetra elit iaculis quis. Nullam vel pellentesque sem, id tristique erat. Sed auctor dolor ut tempor mollis. Ut malesuada, justo in bibendum tristique, urna enim vestibulum orci, vel cursus augue turpis a urna. Aliquam risus diam, varius sit amet condimentum et, suscipit vitae tortor. Donec ac fermentum turpis. Aliquam ut nisi euismod, pretium nibh eu, volutpat nisl. Phasellus eu ex ut tortor sagittis mollis non eu metus. Proin non odio ultrices, imperdiet arcu nec, commodo elit. Aenean sed felis condimentum, tincidunt mi vel, finibus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      
      Vivamus ultricies lacus in turpis congue, vitae bibendum ante scelerisque. Praesent sit amet aliquet enim. Ut faucibus libero non ipsum vulputate dictum. Etiam congue sem purus, laoreet porta orci rutrum interdum. Pellentesque tristique sollicitudin luctus. Praesent vehicula rutrum pretium. Vestibulum elementum sed odio ut hendrerit. Duis facilisis, sem ac maximus fermentum, enim justo ornare felis, cursus porta erat lorem et est.`
    },
    {
      title: 'Bookmarks Integration',
      subtitle: 'Integration for Environment Canada\'s web map.',
      picture: '../../assets/aoi.PNG',
      alt: 'A preview picture of Android Store',
      caseStudyLink: 'XYZ Corp',
      description: 'Built a bunch of shit',
      skills: ['ArcGIS API', 'SCSS', 'Typescript', 'Angular'],
      features: ['ArcGIS API', 'SCSS', 'Typescript', 'Angular'],
      paragraphs: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a blandit nulla. Sed faucibus lorem vel sapien aliquam commodo. Fusce diam massa, gravida et vulputate in, pretium sit amet mauris. Praesent interdum consectetur tellus vel hendrerit. In at odio eget neque malesuada venenatis at non ligula. Nulla ultrices, metus non fringilla euismod, ipsum velit cursus nibh, sollicitudin vestibulum nunc nulla id mi. Duis laoreet felis vel odio molestie, eget vestibulum neque dictum. Curabitur eu scelerisque magna.

      Curabitur mattis tempus metus sit amet luctus. Donec efficitur risus eget lectus elementum, ac mattis turpis ornare. Curabitur aliquam orci ligula, ac commodo urna pellentesque quis. Nulla facilisi. Nam auctor urna arcu, nec vulputate nisi congue sit amet. Fusce hendrerit ipsum in vehicula venenatis. Pellentesque urna ante, convallis at interdum et, sagittis feugiat nunc. Praesent mollis lacus metus, eu aliquam massa bibendum a. Fusce interdum metus id ante convallis, eu facilisis orci ultricies. Nunc nec tincidunt purus. Maecenas maximus posuere justo vitae blandit. Nam convallis efficitur augue, quis condimentum velit bibendum in. Quisque tortor odio, ullamcorper a ornare et, hendrerit a elit.
      
      Nulla in augue tincidunt, ultrices massa a, mattis enim. Curabitur eget blandit massa. Etiam quis luctus ante, ut dapibus libero. Nunc vitae orci in leo euismod efficitur. Etiam efficitur, orci in dictum vestibulum, ipsum dolor varius ex, sit amet elementum sem orci a arcu. In eros lectus, molestie eget tincidunt ut, malesuada et felis. Pellentesque justo justo, faucibus vel eros eget, efficitur mollis nunc. Phasellus porta auctor semper. Curabitur quis cursus enim. Cras dapibus ultrices tortor nec luctus.
      
      Duis fermentum diam ipsum, in pharetra elit iaculis quis. Nullam vel pellentesque sem, id tristique erat. Sed auctor dolor ut tempor mollis. Ut malesuada, justo in bibendum tristique, urna enim vestibulum orci, vel cursus augue turpis a urna. Aliquam risus diam, varius sit amet condimentum et, suscipit vitae tortor. Donec ac fermentum turpis. Aliquam ut nisi euismod, pretium nibh eu, volutpat nisl. Phasellus eu ex ut tortor sagittis mollis non eu metus. Proin non odio ultrices, imperdiet arcu nec, commodo elit. Aenean sed felis condimentum, tincidunt mi vel, finibus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      
      Vivamus ultricies lacus in turpis congue, vitae bibendum ante scelerisque. Praesent sit amet aliquet enim. Ut faucibus libero non ipsum vulputate dictum. Etiam congue sem purus, laoreet porta orci rutrum interdum. Pellentesque tristique sollicitudin luctus. Praesent vehicula rutrum pretium. Vestibulum elementum sed odio ut hendrerit. Duis facilisis, sem ac maximus fermentum, enim justo ornare felis, cursus porta erat lorem et est.`
    },
  ];

}
