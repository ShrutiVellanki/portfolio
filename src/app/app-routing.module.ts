import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectEconoglobeComponent } from './project-econoglobe/project-econoglobe.component';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {path: 'style-guide', component: StyleGuideComponent },
  {path: '', component: MainPageComponent},
  {path: 'project/econoglobe', component: ProjectEconoglobeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ProjectEconoglobeComponent,
  StyleGuideComponent,
];