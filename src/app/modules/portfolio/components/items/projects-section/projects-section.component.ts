import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {

  projects:any[]=[
    {projectName:"Hospital Management System",technologies:"Laravel | MYSQL | Bootstrap",description:"Vaccination and Hospital Management System Using Laravel And MYSQL",gitLink:"https://github.com/Tasheela99/CoviGuard-VaccinationSystem.git",imageLink:"/assets/images/project-images/hospital-system.jpg"},
    {projectName:"Hospital Management System",technologies:"JavaScript | FireBase | Bootstrap",description:"Hospital Management System Using Pure Javascript And Firebase, CRUD Operations",gitLink:"https://github.com/Tasheela99/hospitalsystem.git",imageLink:"/assets/images/project-images/hospital-system-1.jpg"},
    {projectName:"BMI Calculator",technologies:"Flutter | Firebase ",description:"Very Simple Flutter App with Firebase Login , Signup and able to calculate the BMI data and able to see previous BMI Data",gitLink:"https://github.com/Tasheela99/bmiapp.git",imageLink:"/assets/images/project-images/bmi-calculator-system.jpg"},
    {projectName:"POS System",technologies:"Java | MYSQL | JavaFX | SceneBuilder ",description:"Simple Point Of Sale System using javaFx And MYSQL",gitLink:"https://github.com/Tasheela99/point-of-sale.git",imageLink:"/assets/images/project-images/pos-system.jpg"},
    {projectName:"Go Travel WebSite Clone",technologies:"Angular",description:"Go Travel, Travelling Agency Web Site Clone Using Angular",gitLink:"https://github.com/Tasheela99/gotravel.git",imageLink:"/assets/images/project-images/travelling-website.jpg"},
    {projectName:"My Portfolio",technologies:"Angular",description:"Single Page Portfolio For Myself Using Angular",gitLink:"https://github.com/Tasheela99/my-portfolio.git",imageLink:"/assets/images/project-images/portfolio-system.jpg"},
  ];

}
