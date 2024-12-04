import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css'
})
export class MarketplaceComponent {
  currentIndex = 0;

  // Define your carousel items
  carouselItems = [
    {
      image: '../../../../../../assets/img/provider/sd/photo_2024-12-04_17-22-51.jpg',
      title: 'First, you define the patients you can see ',
      description: 'You list the insurance plans you’re in network with and the visit reasons you accept. When patients search for a new provider, they will see a list of providers who meet their criteria. '
    },
    {
      image: '../../../../../../assets/img/provider/sd/photo_2024-12-04_17-22-51 (2).jpg',
      title: 'Patients view your profile and can easily book an open time slot',
      description: 'You’ll stand out to patients through your professional statement, reviews, and photos. They’ll be able to see your availability and book an appointment.'
    },
    {
      image: '../../../../../../assets/img/provider/sd/photo_2024-12-04_17-22-51 (3).jpg',
      title: 'You receive all the pre-appointment information you need',
      description: 'You can request insurance cards, IDs, and your office forms from your patients before their appointment.'
    },
    {
      image: '../../../../../../assets/img/provider/sd/photo_2024-12-04_17-22-51 (4).jpg',
      title: 'Appointment reminders are automatically sent out, too',
      description: 'Zocdoc reminds patients about their upcoming appointments and the pre-appointment information you request. Your office runs on time when patients arrive ready to be seen.'
    },
    {
      image: '../../../../../../assets/img/provider/sd/photo_2024-12-04_17-22-51 (3).jpg',
      title: 'After their visit, we ask them to rate and review their experience',
      description: 'Reviews help you build your online reputation and stand out in search so more new patients book with you. '
    }
  ];

  // Method to go to the previous carousel item
  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  // Method to go to the next carousel item
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }
}
