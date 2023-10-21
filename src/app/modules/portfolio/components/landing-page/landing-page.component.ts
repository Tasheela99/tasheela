import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {


  constructor(private title: Title) {
    this.title.setTitle("Portfolio | Home");
  };

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 4000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 8
      }
    },
  };


  slidesIcon: any[] = [
    {technology: 'HTML', iconClass: 'fab fa-html5'},
    {technology: 'CSS', iconClass: 'fab fa-css3'},
    {technology: 'JavaScript', iconClass: 'fab fa-js'},
    {technology: 'Java', iconClass: 'fab fa-java'},
    {technology: 'Angular', iconClass: 'fab fa-angular'},
    {technology: 'PHP', iconClass: 'fab fa-php'},
    {technology: 'Laravel', iconClass: 'fab fa-laravel'},
    {technology: 'Spring Boot', iconClass: 'fab fa-java'},
    {technology: 'Git', iconClass: 'fab fa-git'},
    {technology: 'GitHub', iconClass: 'fab fa-github'},
  ];

  shopify: string = "Shopify development is crafting and customizing online stores on the Shopify platform. It involves designing layouts, integrating features, and optimizing user experiences for seamless e-commerce operations.";
  uiUx: string = "UI/UX development is the art of designing user interfaces and experiences. It combines aesthetics and usability to create visually pleasing, user-friendly digital products that enhance customer engagement and satisfaction.";
  softwareAndWeb:string = "Software and web development encompass coding and designing applications and websites. Skilled developers create functional, user-friendly, and scalable digital solutions, catering to diverse industries and user needs.";
  mySkillsAndTools: string = "I possess proficiency in various programming languages and frameworks, such as Python, Java, and JavaScript, along with experience in web development, database management, and application development. These skills empower me to create innovative digital solutions.";


}
