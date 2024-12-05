import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';
import { NetworkDoctorComponent } from '../network-doctor/network-doctor.component';
import { ServicesComponent } from '../services/services.component';
import { AdvertComponent } from '../advert/advert.component';
import { PartnerComponent } from '../partner/partner.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { FooterComponent } from '../common/footer/footer.component';
import { BannerComponent } from '../banner/banner.component';
import { SignInComponent } from '../../../auth/components/sign-in/sign-in.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, NetworkDoctorComponent, ServicesComponent, AdvertComponent, PartnerComponent, DoctorsComponent, SignInComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  // Use ViewChild to get a reference to the SignInComponent
  @ViewChild('SignInComponent') signInComponent!: SignInComponent;

  constructor(private router: Router) { }
  isHomePage(): boolean {
    return this.router.url === '/' || this.router.url === '/portal';
  }

  isProviderPage(): boolean {
    return this.router.url === '/providers';
  }

  isHelpPage(): boolean {
    return this.router.url === '/help';
  }

  openSignInModal() {
    this.signInComponent.openModal();
  }
}
