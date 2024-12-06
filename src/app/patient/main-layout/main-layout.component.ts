import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
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
export class MainLayoutComponent {

}
