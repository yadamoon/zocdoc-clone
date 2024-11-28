import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';
import { NetworkDoctorComponent } from '../network-doctor/network-doctor.component';
import { ServicesComponent } from '../services/services.component';
import { AdvertComponent } from '../advert/advert.component';
import { PartnerComponent } from '../partner/partner.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { SignInComponent } from '../../../auth/sign-in/sign-in.component';
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../common/footer/footer.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, NetworkDoctorComponent, ServicesComponent, AdvertComponent, PartnerComponent, DoctorsComponent, SignInComponent, BannerComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
