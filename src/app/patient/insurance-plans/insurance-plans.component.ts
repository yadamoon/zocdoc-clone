import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insurance-plans.component.html',
  styleUrl: './insurance-plans.component.css'
})
export class InsurancePlansComponent {
  insurancePlans = [
    { type: 'Medical', status: 'None added' },
    { type: 'Dental', status: 'None added' },
    { type: 'Vision', status: 'None added' },
  ];
}
