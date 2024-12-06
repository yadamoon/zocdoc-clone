import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AdminLayoutComponent {
  @ViewChild('userMenu') userMenu!: ElementRef;

  isSidebarOpen = true;
  isUserMenuOpen = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.userMenu.nativeElement.contains(event.target)) {
      this.isUserMenuOpen = false;
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  logout() {
    // Implement logout logic
    console.log('Logging out...');
  }
}
