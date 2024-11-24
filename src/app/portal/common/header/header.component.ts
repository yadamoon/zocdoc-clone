import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from '../../banner/banner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isBrowseOpen = false;
  isLoginOpen = false;

  toggleBrowse() {
    this.isBrowseOpen = !this.isBrowseOpen;
    this.isLoginOpen = false;
  }

  toggleLogin() {
    this.isLoginOpen = !this.isLoginOpen;
    this.isBrowseOpen = false;
  }

}