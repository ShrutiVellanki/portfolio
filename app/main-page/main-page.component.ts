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
      jobTitle: 'Software Developer',
      startDate: 'April 1st, 2020',
      endDate: 'April 2nd 2020',
      company: 'XYZ Corp',
      description: 'Built a bunch of shit',
    },
    {
      jobTitle: 'Software Engineer',
      startDate: 'April 1st, 2020',
      endDate: 'April 2nd 2020',
      company: 'XYZ Corp',
      description: 'Built a bunch of shit',
    },
    {
      jobTitle: 'Web Developer',
      startDate: 'April 1st, 2020',
      endDate: 'April 2nd 2020',
      company: 'XYZ Corp',
      description: 'Built a bunch of shit',
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
