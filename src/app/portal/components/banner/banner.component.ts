import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  conditiom = new FormControl('');
  insurance = new FormControl('');

  options: string[] = [
    'Aetna',
    'Blue Cross Blue Shield',
    'Cigna',
    'Humana',
    'UnitedHealthcare',
    'Medicare Advantage',
    'Medicaid',
    'Kaiser Permanente',
    'Anthem',
    'Oscar Health'
  ];
  // Sample options for conditions, procedures, or doctors
  conditions: string[] = [
    'Flu',
    'COVID-19',
    'Knee Surgery',
    'Physical Therapy',
    'Cardiology',
    'Dermatology',
    'Pediatrics',
    'Orthopedics',
    'General Checkup',
    'Vaccination'
  ];
  filteredInsurancePlans: string[] = this.options;
  selectedInsurancePlan: string = '';
  showDropdown: boolean = false;

  filteredConditions: string[] = this.conditions;
  selectedCondition: string = '';
  showConditionDropdown: boolean = false;

  // Flag to track if a dropdown item is clicked
  private dropdownItemClicked: boolean = false;

  // Filter insurance plans based on user input
  onInsurancePlanChange(value: string) {
    this.filteredInsurancePlans = this.options.filter((plan) =>
      plan.toLowerCase().includes(value.toLowerCase())
    );
    this.showDropdown = this.filteredInsurancePlans.length > 0; // Show dropdown if there are options
  }

  // Select an insurance plan from the dropdown
  selectInsurancePlan(plan: string) {
    // this.selectedInsurancePlan = plan;
    // this.filteredInsurancePlans = []; // Hide dropdown after selection
    // this.showDropdown = false; // Ensure dropdown is hidden
    this.insurance.setValue(plan)
    this.filteredInsurancePlans = []; // Hide dropdown after selection
    this.showDropdown = false; // Ensure dropdown is hidden
    console.log("Selected Condition:", this.insurance.value);

  }

  hideDropdown() {
    setTimeout(() => {
      this.showDropdown = false;
    }, 100); // Timeout allows click events to register
  }
  // Filter conditions based on user input
  onConditionChange(value: string) {
    this.filteredConditions = this.conditions.filter((condition) =>
      condition.toLowerCase().includes(value.toLowerCase())
    );
    this.showConditionDropdown = this.filteredConditions.length > 0; // Show dropdown if there are options
  }

  // Select a condition from the dropdown
  selectCondition(c: string) {
    // this.selectedCondition = condition;
    this.conditiom.setValue(c)
    this.filteredConditions = []; // Hide dropdown after selection
    this.showConditionDropdown = false; // Ensure dropdown is hidden
    console.log("Selected Condition:", this.conditiom.value);

  }

  // Prevent dropdown from hiding if an item is clicked
  hideConditionDropdown() {
    setTimeout(() => {
      if (!this.dropdownItemClicked) {
        this.showConditionDropdown = false;
      }
      this.dropdownItemClicked = false; // Reset the flag
    }, 100); // Timeout allows click events to register
  }

  // Set the flag when an item is clicked
  onDropdownItemClick() {
    console.log("Dropdown item clicked");

    this.dropdownItemClicked = true;
  }


  ab() {
    console.log("item clicked...");

  }

}
