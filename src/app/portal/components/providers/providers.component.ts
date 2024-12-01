import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerProviderComponent } from './components/banner-provider/banner-provider.component';
import { ProductComponent } from './components/product/product.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { SubscriptionOrFreeComponent } from './components/subscription-or-free/subscription-or-free.component';
import { EnterpriseComponent } from './components/enterprise/enterprise.component';
import { EhrsComponent } from './components/ehrs/ehrs.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { HelpingComponent } from './components/helping/helping.component';
import { FooterComponent } from '../common/footer/footer.component';
import { ProvidersSquigglethriveComponent } from './components/providers-squigglethrive/providers-squigglethrive.component';

interface NavItem {
  itemName: string;
  cssClass?: string;
  action?: () => void;
}
@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [CommonModule, BannerProviderComponent, ProductComponent, IntroduceComponent, SubscriptionOrFreeComponent, EnterpriseComponent, EhrsComponent, MarketplaceComponent, HelpingComponent, ProvidersSquigglethriveComponent, FooterComponent],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent {
  navItems: NavItem[] = [
    { itemName: 'Home', cssClass: 'hover:text-blue-500', action: () => this.handleAction('Home') },
    { itemName: 'About', cssClass: 'hover:text-green-500', action: () => this.handleAction('About') },
    { itemName: 'Services', cssClass: 'hover:text-orange-500', action: () => this.handleAction('Services') },
    { itemName: 'Contact', cssClass: 'hover:text-red-500', action: () => this.handleAction('Contact') },
  ];

  handleAction(itemName: string) {
    console.log(`Action triggered for ${itemName}`);
    // Additional action logic can be added here
  }
}