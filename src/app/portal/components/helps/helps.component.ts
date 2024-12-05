import { Component } from '@angular/core';
import { ProviderComponent } from "./provider/provider.component";
import { ServiceComponent } from './service/service.component';

@Component({
  selector: 'app-helps',
  standalone: true,
  imports: [ServiceComponent, ProviderComponent],
  templateUrl: './helps.component.html',
  styleUrl: './helps.component.css'
})
export class HelpsComponent {

}
