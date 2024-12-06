import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellGuideComponent } from './well-guide.component';

describe('WellGuideComponent', () => {
  let component: WellGuideComponent;
  let fixture: ComponentFixture<WellGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WellGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WellGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
