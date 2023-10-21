import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import {AboutComponent} from "./components/about/about.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {HobbiesComponent} from "./components/hobbies/hobbies.component";
import {ContactComponent} from "./components/contact/contact.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";

const routes: Routes = [
  { path: '', component: PortfolioComponent , children:[
      {path:'',redirectTo:'landing',pathMatch:'full'},
      {path:'landing',component:LandingPageComponent},
      {path:'about',component:AboutComponent},
      {path:'projects',component:ProjectsComponent},
      {path:'hobbies',component:HobbiesComponent},
      {path:'contact',component:ContactComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
