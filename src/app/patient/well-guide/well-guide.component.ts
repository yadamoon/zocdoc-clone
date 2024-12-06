import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-well-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './well-guide.component.html',
  styleUrl: './well-guide.component.css'
})
export class WellGuideComponent {
  guideItems = [
    {
      title: 'Annual Physical',

      image: '../../../assets/img/main/PrimaryCarePhysician___0dc77.svg',
      description: 'The CDC recommends regular checkups once per year to catch health problems early.',
    },
    {
      title: 'Skin Screening',
      image: '../../../assets/img/main/Dermatologist___77c81.svg',
      description: 'Prevention and early detection are key to fighting cancer.',
    },
    {
      title: 'Dental Cleaning',
      image: '../../../assets/img/main/Dentist___430f2.svg',
      description: 'Regular cleanings help prevent gum disease and heart disease.',
    },
    {
      title: 'Vision Exam',
      image: '../../../assets/img/main/Optometrist___7fe87.svg',
      description: 'Adults need vision screenings annually.',
    },
  ];
}
