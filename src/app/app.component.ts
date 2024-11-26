import { NetworkDoctorComponent } from './portal/network-doctor/network-doctor.component';
import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './portal/common/header/header.component';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from './portal/services/services.component';
import { AdvertComponent } from './portal/advert/advert.component';
import { PartnerComponent } from './portal/partner/partner.component';
import { DoctorsComponent } from './portal/doctors/doctors.component';
import { FooterComponent } from './portal/common/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NetworkDoctorComponent, ServicesComponent, AdvertComponent, PartnerComponent, DoctorsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'zocdoc-clone';

  ngOnInit(): void {
    initFlowbite();
  }
}