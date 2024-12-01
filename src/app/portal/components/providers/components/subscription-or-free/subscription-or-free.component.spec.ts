import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionOrFreeComponent } from './subscription-or-free.component';

describe('SubscriptionOrFreeComponent', () => {
  let component: SubscriptionOrFreeComponent;
  let fixture: ComponentFixture<SubscriptionOrFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionOrFreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionOrFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
