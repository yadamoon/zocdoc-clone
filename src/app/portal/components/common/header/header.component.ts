import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';
import { SignInComponent } from '../../../../auth/components/sign-in/sign-in.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { SearchComponent } from "../../helps/search/search.component";


interface NavItem {
  itemName: string;
  cssClass?: string;
  action?: () => void;
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, BannerComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  isBrowseOpen = false;
  isLoginOpen = false;
  selectedSpeciality: string | null = null;
  selectedTab = 'doctors';
  @Input() navItems!: NavItem[];

  // Corrected variable name
  isLoginModalOpen: boolean = false;


  @Output() signInModalToggle = new EventEmitter<void>();

  toggleSignInModal() {
    this.signInModalToggle.emit();
  }

  toggleLogin() { // Corrected function name
    this.isLoginOpen = !this.isLoginOpen; // Ensure this is the correct variable
  }

  openLoginModal() {
    this.isLoginModalOpen = true;
    this.isLoginOpen = false; // Close dropdown when modal opens
  }

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
          "Nexplanon Removal",
          "Hyperactive Disorder (ADD / ADHD)",
          "OB / GYN Emergency",
          "Nexplanon Removal",
          "Hyperactive Disorder (ADD / ADHD)",
          "OB / GYN Emergency",
          "Nexplanon Removal",
          "Hyperactive Disorder (ADD / ADHD)",
          "OB / GYN Emergency",
          "Nexplanon Removal",
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
          "LGBT Care",
          "Pre-Surgery Checkup / Pre-Surgical Clearance",
          "Annual Physical",
          "LGBT Care",
          "Pre-Surgery Checkup / Pre-Surgical Clearance",
          "Annual Physical",
          "LGBT Care",
          "Pre-Surgery Checkup / Pre-Surgical Clearance",
          "Annual Physical",
          "LGBT Care",
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
          "IUD Insertion",
          "ENT Emergency Visit",
          "Pain Medication Prescription",
          "IUD Insertion",
          "ENT Emergency Visit",
          "Pain Medication Prescription",
          "IUD Insertion",
          "ENT Emergency Visit",
          "Pain Medication Prescription",
          "IUD Insertion",
          "ENT Emergency Visit",
          "Pain Medication Prescription",
          "IUD Insertion",
          "ENT Emergency Visit",
          "Pain Medication Prescription",
          "IUD Insertion",
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

  isHomePage(): boolean {
    return this.router.url === '/';
  }

  isProvider(): boolean {
    return this.router.url === '/providers';
  }
  isHelpPage(): boolean {
    return this.router.url === '/help';
  }
}