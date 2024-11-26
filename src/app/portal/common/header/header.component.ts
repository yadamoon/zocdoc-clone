import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isBrowseOpen = false;
  isLoginOpen = false;
  selectedSpeciality: string | null = null;
  selectedTab = 'doctors';

  doctorSpecialities = [
    'Primary Care Physicians',
    'Psychiatrists',
    'Optometrists',
    'Dermatologists',
    'Dentists',
    'Therapist-Counselors',
    'Ophthalmologists',
    'OBGYNs',
    'Psychologists',
    'Chiropractors',
    'Pediatricians',
    'Orthopedic Surgeons',
  ];
  facilitySpecialities = [
    'Urgent Care',
    'Podiatrists',
  ];
  commonVisitReasons = [{
    name: 'Dentists',
    subCommonVisitReasons: [
      'Medical Doctors',
      'Medical Dentists',
      'Medical Pediatric Dentists',
      'Medical Pediatricians',
      'Medical Dermatologists',
      'Medical OB-GYNs',
      'Medical Psychiatrists',
      'Medical Therapists',
      'Medical Eye Doctors',
      'Medical ENT Doctors',
      'Medical Urgent Care',
      'Medical Medicare'
    ], showSubCities: false
  },
  {
    name: 'OBGYNs', subCommonVisitReasons: [
      'Dental cleaning',
      'Teeth bonding',
      'Dental implants'
    ]
  },
  {
    name: 'Psychologists', subCommonVisitReasons: [
      'Annual eye exam',
      'Eye exam'
    ], showSubCities: false
  },
  {
    name: 'Psychiatrists',
    subCommonVisitReasons: [
      'Medical Doctors',
      'Medical Dentists',
      'Medical Pediatric Dentists',
      'Medical Pediatricians',
      'Medical Dermatologists',
      'Medical OB-GYNs',
      'Medical Psychiatrists',
      'Medical Therapists',
      'Medical Eye Doctors',
      'Medical ENT Doctors',
      'Medical Urgent Care',
      'Medical Medicare'
    ], showSubCities: false
  },
  {
    name: 'Therapist - Counselors', subCommonVisitReasons: [
      'Dental cleaning',
      'Teeth bonding',
      'Dental implants'
    ]
  },
  {
    name: 'Urgent Care', subCommonVisitReasons: [
      'Annual eye exam',
      'Eye exam'
    ], showSubCities: false
  },
  {
    name: 'Chiropractors',
    subCommonVisitReasons: [
      'Medical Doctors',
      'Medical Dentists',
      'Medical Pediatric Dentists',
      'Medical Pediatricians',
      'Medical Dermatologists',
      'Medical OB-GYNs',
      'Medical Psychiatrists',
      'Medical Therapists',
      'Medical Eye Doctors',
      'Medical ENT Doctors',
      'Medical Urgent Care',
      'Medical Medicare'
    ], showSubCities: false
  },
  {
    name: 'Optometrists', subCommonVisitReasons: [
      'Dental cleaning',
      'Teeth bonding',
      'Dental implants'
    ]
  },
  {
    name: 'Ophthalmologists', subCommonVisitReasons: [
      'Annual eye exam',
      'Eye exam'
    ], showSubCities: false
  },
  {
    name: 'Podiatrists',
    subCommonVisitReasons: [
      'Medical Doctors',
      'Medical Dentists',
      'Medical Pediatric Dentists',
      'Medical Pediatricians',
      'Medical Dermatologists',
      'Medical OB-GYNs',
      'Medical Psychiatrists',
      'Medical Therapists',
      'Medical Eye Doctors',
      'Medical ENT Doctors',
      'Medical Urgent Care',
      'Medical Medicare'
    ], showSubCities: false
  },
  {
    name: 'Pediatricians', subCommonVisitReasons: [
      'Dental cleaning',
      'Teeth bonding',
      'Dental implants'
    ]
  },
  {
    name: 'Dermatologists', subCommonVisitReasons: [
      'Annual eye exam',
      'Eye exam'
    ], showSubCities: false
  },
  {
    name: 'Orthopedic Surgeons',
    subCommonVisitReasons: [
      'Medical Doctors',
      'Medical Dentists',
      'Medical Pediatric Dentists',
      'Medical Pediatricians',
      'Medical Dermatologists',
      'Medical OB-GYNs',
      'Medical Psychiatrists',
      'Medical Therapists',
      'Medical Eye Doctors',
      'Medical ENT Doctors',
      'Medical Urgent Care',
      'Medical Medicare'
    ], showSubCities: false
  },
  {
    name: 'Procedures', subCommonVisitReasons: [
      'Dental cleaning',
      'Teeth bonding',
      'Dental implants'
    ]
  }
  ]

  producer = {
    name: 'producer',
    subCityProducer: [
      {
        name: 'City 1',
        showSubCities: false,
        services: [
          "Hyperactive Disorder (ADD / ADHD)",
          "OB / GYN Emergency",
          "Nexplanon Removal"
        ]
      },
      {
        name: 'City 2',
        showSubCities: false,
        services: [
          "Pre-Surgery Checkup / Pre-Surgical Clearance",
          "Annual Physical",
          "LGBT Care"
        ]
      },
      {
        name: 'City 3',
        showSubCities: false,
        services: [
          "ENT Emergency Visit",
          "Pain Medication Prescription",
          "IUD Insertion"
        ]
      }
      // Add more cities as needed
    ]
  };



  toggleBrowse() {
    this.isBrowseOpen = !this.isBrowseOpen;
    this.isLoginOpen = false;

  }

  toggleLogin() {
    this.isLoginOpen = !this.isLoginOpen;
    this.isBrowseOpen = false;
  }


  toggleModal() {
    this.isBrowseOpen = !this.isBrowseOpen;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  selectSpeciality(speciality: string) {
    this.selectedSpeciality = speciality;
    this.toggleBrowse();
  }

  toggleSubCity(city: any) {
    city.showSubCities = !city.showSubCities;
  }
}