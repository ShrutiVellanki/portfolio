import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  introContentList = [`Intro Content`, `IntroContent2`];
  
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
      description: 'Built a bunch of shit',
      skills: ['html', 'css', 'javascript'],
    },
    {
      projectTitle: 'Weather App',
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
  ];

}
