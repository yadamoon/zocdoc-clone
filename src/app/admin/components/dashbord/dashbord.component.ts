import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Activity {
  id: number;
  icon: string;
  description: string;
  time: string;
}

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  status: string;
  statusClass: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashbord.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class AdminDashboardComponent {
  recentActivities: Activity[] = [
    {
      id: 1,
      icon: 'fas fa-home',
      description: 'New property listed: Luxury Villa in Beverly Hills',
      time: '2 minutes ago'
    },
    {
      id: 2,
      icon: 'fas fa-user',
      description: 'New user registration: John Smith',
      time: '15 minutes ago'
    },
    {
      id: 3,
      icon: 'fas fa-dollar-sign',
      description: 'Payment received for Property #1234',
      time: '1 hour ago'
    },
    {
      id: 4,
      icon: 'fas fa-envelope',
      description: 'New inquiry for Seaside Apartment',
      time: '2 hours ago'
    }
  ];

  latestProperties: Property[] = [
    {
      id: 1,
      title: 'Modern Apartment',
      location: 'Downtown, New York',
      price: 850000,
      image: 'assets/images/properties/property-1.jpg',
      status: 'Active',
      statusClass: 'bg-green-100 text-green-800'
    },
    {
      id: 2,
      title: 'Luxury Villa',
      location: 'Beverly Hills, LA',
      price: 2500000,
      image: 'assets/images/properties/property-2.jpg',
      status: 'Pending',
      statusClass: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 3,
      title: 'Beach House',
      location: 'Miami Beach, FL',
      price: 1200000,
      image: 'assets/images/properties/property-3.jpg',
      status: 'Sold',
      statusClass: 'bg-blue-100 text-blue-800'
    }
  ];
} 