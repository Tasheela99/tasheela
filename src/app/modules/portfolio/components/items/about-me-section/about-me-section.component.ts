import {Component} from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent {

  myself: string = "I am Tasheela Jayawickrama, a passionate undergraduate from Sri Lanka with a burning desire to pursue a career as a software engineer. My journey began with a strong academic foundation, likely in computer science or a related field, providing me with the essential knowledge and skills to thrive in this dynamic industry. However, my fascination with technology goes beyond the academic realm; it's a heartfelt passion. I take joy in the creative and problem-solving aspects of software engineering."+
    "What sets me apart is my unwavering determination. I understand that this field demands constant learning and adaptation to new technologies, and I embrace this challenge with open arms. I possess strong analytical skills and thrive in a collaborative environment, recognizing the significance of teamwork in developing user-centric software solutions. Furthermore, my Sri Lankan heritage adds a unique dimension to my perspective. As I chart my course towards becoming a software engineer, I eagerly anticipate the exciting challenges and opportunities to create meaningful, impactful software solutions for the world."

}
