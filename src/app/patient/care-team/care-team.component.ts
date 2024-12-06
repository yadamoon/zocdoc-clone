import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-care-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './care-team.component.html',
  styleUrl: './care-team.component.css'
})
export class CareTeamComponent {
  careTeam = [
    { name: 'Find a primary care doctor', image: '../../../assets/img/main/Doctor1___78f71.svg' },
    { name: 'Find a dentist', image: '../../../assets/img/main/Doctor2___3ea84.svg' },
  ];
}
