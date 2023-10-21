import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CarouselModule} from "ngx-owl-carousel-o";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { AboutMeSectionComponent } from './components/items/about-me-section/about-me-section.component';
import { ProjectsSectionComponent } from './components/items/projects-section/projects-section.component';
import { ContactMeSectionComponent } from './components/items/contact-me-section/contact-me-section.component';


@NgModule({
    declarations: [
        PortfolioComponent,
        AboutComponent,
        ContactComponent,
        ProjectsComponent,
        HobbiesComponent,
        LandingPageComponent,
        AboutMeSectionComponent,
        ProjectsSectionComponent,
        ContactMeSectionComponent
    ],
    exports: [
        PortfolioComponent
    ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    MatInputModule,
    FormsModule
  ]
})
export class PortfolioModule { }
