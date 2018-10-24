import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routs:Routes = [
  {path:'projects',component:MyProjectsComponent},
  {path:'skills',component:MySkillsComponent},
  {path:'contact',component:ContactMeComponent},
  {path:'',component:HomeComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routs)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
