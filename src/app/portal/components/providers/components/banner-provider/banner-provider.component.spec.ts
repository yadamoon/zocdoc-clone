import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProviderComponent } from './banner-provider.component';

describe('BannerProviderComponent', () => {
  let component: BannerProviderComponent;
  let fixture: ComponentFixture<BannerProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerProviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
