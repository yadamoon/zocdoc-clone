import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WellGuideComponent } from '../well-guide/well-guide.component';
import { CareTeamComponent } from '../care-team/care-team.component';
import { InsurancePlansComponent } from '../insurance-plans/insurance-plans.component';
import { FooterComponent } from '../../portal/components/common/footer/footer.component';
import { HeaderComponent } from "../../portal/components/common/header/header.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, WellGuideComponent, CareTeamComponent, InsurancePlansComponent, FooterComponent, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  // check form local storage if user is logged in

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      console.log('User is logged in');
    } else {
      console.log('User is not logged in');
    }
  }

}
