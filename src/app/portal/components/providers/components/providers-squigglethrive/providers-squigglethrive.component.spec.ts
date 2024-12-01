import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersSquigglethriveComponent } from './providers-squigglethrive.component';

describe('ProvidersSquigglethriveComponent', () => {
  let component: ProvidersSquigglethriveComponent;
  let fixture: ComponentFixture<ProvidersSquigglethriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvidersSquigglethriveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvidersSquigglethriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
