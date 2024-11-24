import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  cities = [
    {
      name: 'New York City', subCities: [
        'New York City Doctors',
        'New York City Dentists',
        'New York City Pediatric Dentists',
        'New York City Pediatricians',
        'New York City Dermatologists',
        'New York City OB-GYNs',
        'New York City Psychiatrists',
        'New York City Therapists',
        'New York City Eye Doctors',
        'New York City ENT Doctors',
        'New York City Urgent Care',
        'New York City Medicare',
        'New York City Hospitals'
      ], showSubCities: false
    },
    {
      name: 'Baltimore', subCities: [
        'Baltimore Doctors',
        'Baltimore Dentists',
        'Baltimore Pediatric Dentists',
        'Baltimore Pediatricians',
        'Baltimore Dermatologists',
        'Baltimore OB-GYNs',
        'Baltimore Psychiatrists',
        'Baltimore Therapists',
        'Baltimore Eye Doctors',
        'Baltimore ENT Doctors',
        'Baltimore Urgent Care',
        'Baltimore Medicare'

      ], showSubCities: false
    },
    {
      name: 'Philadelphia', subCities: [
        'Philadelphia Doctors',
        'Philadelphia Dentists',
        'Philadelphia Pediatric Dentists',
        'Philadelphia Pediatricians',
        'Philadelphia Dermatologists',
        'Philadelphia OB-GYNs',
        'Philadelphia Psychiatrists',
        'Philadelphia Therapists',
        'Philadelphia Eye Doctors',
        'Philadelphia ENT Doctors',
        'Philadelphia Urgent Care',
        'Philadelphia Medicare'

      ], showSubCities: false
    },
    {
      name: 'Boston', subCities: [
        'Boston Doctors',
        'Boston Dentists',
        'Boston Pediatric Dentists',
        'Boston Pediatricians',
        'Boston Dermatologists',
        'Boston OB-GYNs',
        'Boston Psychiatrists',
        'Boston Therapists',
        'Boston Eye Doctors',
        'Boston ENT Doctors',
        'Boston Urgent Care',
        'Boston Medicare'
      ], showSubCities: false
    },
    {
      name: 'Brooklyn', subCities: [
        'Brooklyn Doctors',
        'Brooklyn Dentists',
        'Brooklyn Pediatric Dentists',
        'Brooklyn Pediatricians',
        'Brooklyn Dermatologists',
        'Brooklyn OB-GYNs',
        'Brooklyn Psychiatrists',
        'Brooklyn Therapists',
        'Brooklyn Eye Doctors',
        'Brooklyn ENT Doctors',
        'Brooklyn Urgent Care',
        'Brooklyn Medicare'

      ], showSubCities: false
    },
    {
      name: 'Washington, DC', subCities: [
        'Washington, DC Doctors',
        'Washington, DC Dentists',
        'Washington, DC Pediatric Dentists',
        'Washington, DC Pediatricians',
        'Washington, DC Dermatologists',
        'Washington, DC OB-GYNs',
        'Washington, DC Psychiatrists',
        'Washington, DC Therapists',
        'Washington, DC Eye Doctors',
        'Washington, DC ENT Doctors',
        'Washington, DC Urgent Care',
        'Washington, DC Medicare'


      ], showSubCities: false
    },
    {
      name: 'Washington, DC', subCities: [
        'Washington, DC Doctors',
        'Washington, DC Dentists',
        'Washington, DC Pediatric Dentists',
        'Washington, DC Pediatricians',
        'Washington, DC Dermatologists',
        'Washington, DC OB-GYNs',
        'Washington, DC Psychiatrists',
        'Washington, DC Therapists',
        'Washington, DC Eye Doctors',
        'Washington, DC ENT Doctors',
        'Washington, DC Urgent Care',
        'Washington, DC Medicare'

      ], showSubCities: false
    },

    // Houston
    {
      name: 'Houston', subCities: [
        'Houston Doctors',
        'Houston Dentists',
        'Houston Pediatric Dentists',
        'Houston Pediatricians',
        'Houston Dermatologists',
        'Houston OB-GYNs',
        'Houston Psychiatrists',
        'Houston Therapists',
        'Houston Eye Doctors',
        'Houston ENT Doctors',
        'Houston Urgent Care',
        'Houston Medicare'
      ], showSubCities: false
    },
    // San Francisco
    {
      name: 'San Francisco', subCities: [
        'San Francisco Doctors',
        'San Francisco Dentists',
        'San Francisco Pediatric Dentists',
        'San Francisco Pediatricians',
        'San Francisco Dermatologists',
        'San Francisco OB-GYNs',
        'San Francisco Psychiatrists',
        'San Francisco Therapists',
        'San Francisco Eye Doctors',
        'San Francisco ENT Doctors',
        'San Francisco Urgent Care',
        'San Francisco Medicare'
      ], showSubCities: false
    },
    // Chicago
    {
      name: 'Chicago', subCities: [
        'Chicago Doctors',
        'Chicago Dentists',
        'Chicago Pediatric Dentists',
        'Chicago Pediatricians',
        'Chicago Dermatologists',
        'Chicago OB-GYNs',
        'Chicago Psychiatrists',
        'Chicago Therapists',
        'Chicago Eye Doctors',
        'Chicago ENT Doctors',
        'Chicago Urgent Care',
        'Chicago Medicare'
      ], showSubCities: false
    },
    // Denver
    {
      name: 'Denver', subCities: [
        'Denver Doctors',
        'Denver Dentists',
        'Denver Pediatric Dentists',
        'Denver Pediatricians',
        'Denver Dermatologists',
        'Denver OB-GYNs',
        'Denver Psychiatrists',
        'Denver Therapists',
        'Denver Eye Doctors',
        'Denver ENT Doctors',
        'Denver Urgent Care',
        'Denver Medicare'
      ], showSubCities: false
    },
    // Queens
    {
      name: 'Queens', subCities: [
        'Queens Doctors',
        'Queens Dentists',
        'Queens Pediatric Dentists',
        'Queens Pediatricians',
        'Queens Dermatologists',
        'Queens OB-GYNs',
        'Queens Psychiatrists',
        'Queens Therapists',
        'Queens Eye Doctors',
        'Queens ENT Doctors',
        'Queens Urgent Care',
        'Queens Medicare'
      ], showSubCities: false
    },
    // Brooklyn
    {
      name: 'Brooklyn', subCities: [
        'Brooklyn Doctors',
        'Brooklyn Dentists',
        'Brooklyn Pediatric Dentists',
        'Brooklyn Pediatricians',
        'Brooklyn Dermatologists',
        'Brooklyn OB-GYNs',
        'Brooklyn Psychiatrists',
        'Brooklyn Therapists',
        'Brooklyn Eye Doctors',
        'Brooklyn ENT Doctors',
        'Brooklyn Urgent Care',
        'Brooklyn Medicare'
      ], showSubCities: false
    },

    // Seattle
    {
      name: 'Seattle', subCities: [
        'Seattle Doctors',
        'Seattle Dentists',
        'Seattle Pediatric Dentists',
        'Seattle Pediatricians',
        'Seattle Dermatologists',
        'Seattle OB-GYNs',
        'Seattle Psychiatrists',
        'Seattle Therapists',
        'Seattle Eye Doctors',
        'Seattle ENT Doctors',
        'Seattle Urgent Care',
        'Seattle Medicare'
      ], showSubCities: false
    },
    // Dallas
    {
      name: 'Dallas', subCities: [
        'Dallas Doctors',
        'Dallas Dentists',
        'Dallas Pediatric Dentists',
        'Dallas Pediatricians',
        'Dallas Dermatologists',
        'Dallas OB-GYNs',
        'Dallas Psychiatrists',
        'Dallas Therapists',
        'Dallas Eye Doctors',
        'Dallas ENT Doctors',
        'Dallas Urgent Care',
        'Dallas Medicare'
      ], showSubCities: false
    },
    // Miami
    {
      name: 'Miami', subCities: [
        'Miami Doctors',
        'Miami Dentists',
        'Miami Pediatric Dentists',
        'Miami Pediatricians',
        'Miami Dermatologists',
        'Miami OB-GYNs',
        'Miami Psychiatrists',
        'Miami Therapists',
        'Miami Eye Doctors',
        'Miami ENT Doctors',
        'Miami Urgent Care',
        'Miami Medicare'
      ]
    },
    // Atlanta
    {
      name: 'Atlanta', subCities: [
        'Atlanta Doctors',
        'Atlanta Dentists',
        'Atlanta Pediatric Dentists',
        'Atlanta Pediatricians',
        'Atlanta Dermatologists',
        'Atlanta OB-GYNs',
        'Atlanta Psychiatrists',
        'Atlanta Therapists',
        'Atlanta Eye Doctors',
        'Atlanta ENT Doctors',
        'Atlanta Urgent Care',
        'Atlanta Medicare'
      ], showSubCities: false
    },

    // Chicago
    {
      name: 'Chicago', subCities: [
        'Chicago Doctors',
        'Chicago Dentists',
        'Chicago Pediatric Dentists',
        'Chicago Pediatricians',
        'Chicago Dermatologists',
        'Chicago OB-GYNs',
        'Chicago Psychiatrists',
        'Chicago Therapists',
        'Chicago Eye Doctors',
        'Chicago ENT Doctors',
        'Chicago Urgent Care',
        'Chicago Medicare'
      ]
    },
    // Denver
    {
      name: 'Denver', subCities: [
        'Denver Doctors',
        'Denver Dentists',
        'Denver Pediatric Dentists',
        'Denver Pediatricians',
        'Denver Dermatologists',
        'Denver OB-GYNs',
        'Denver Psychiatrists',
        'Denver Therapists',
        'Denver Eye Doctors',
        'Denver ENT Doctors',
        'Denver Urgent Care',
        'Denver Medicare'
      ]
    },
    // Austin
    {
      name: 'Austin', subCities: [
        'Austin Doctors',
        'Austin Dentists',
        'Austin Pediatric Dentists',
        'Austin Pediatricians',
        'Austin Dermatologists',
        'Austin OB-GYNs',
        'Austin Psychiatrists',
        'Austin Therapists',
        'Austin Eye Doctors',
        'Austin ENT Doctors',
        'Austin Urgent Care',
        'Austin Medicare'
      ]
    },
    // Los Angeles
    {
      name: 'Los Angeles', subCities: [
        'Los Angeles Doctors',
        'Los Angeles Dentists',
        'Los Angeles Pediatric Dentists',
        'Los Angeles Pediatricians',
        'Los Angeles Dermatologists',
        'Los Angeles OB-GYNs',
        'Los Angeles Psychiatrists',
        'Los Angeles Therapists',
        'Los Angeles Eye Doctors',
        'Los Angeles ENT Doctors',
        'Los Angeles Urgent Care',
        'Los Angeles Medicare'
      ]
    },
    // Long Island
    {
      name: 'Long Island', subCities: [
        'Long Island Doctors',
        'Long Island Dentists',
        'Long Island Pediatric Dentists',
        'Long Island Pediatricians',
        'Long Island Dermatologists',
        'Long Island OB-GYNs',
        'Long Island Psychiatrists',
        'Long Island Therapists',
        'Long Island Eye Doctors',
        'Long Island ENT Doctors',
        'Long Island Urgent Care',
        'Long Island Medicare'
      ]
    },
    // San Diego
    {
      name: 'San Diego', subCities: [
        'San Diego Doctors',
        'San Diego Dentists',
        'San Diego Pediatric Dentists',
        'San Diego Pediatricians',
        'San Diego Dermatologists',
        'San Diego OB-GYNs',
        'San Diego Psychiatrists',
        'San Diego Therapists',
        'San Diego Eye Doctors',
        'San Diego ENT Doctors',
        'San Diego Urgent Care',
        'San Diego Medicare'
      ]
    }


  ];

  commonVisitReasons = ['Medical', 'Dental', 'Mental Health', 'Vision'];

  toggleSubCity(city: any) {
    city.showSubCities = !city.showSubCities;
  }
}






