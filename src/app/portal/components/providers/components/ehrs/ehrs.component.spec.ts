import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhrsComponent } from './ehrs.component';

describe('EhrsComponent', () => {
  let component: EhrsComponent;
  let fixture: ComponentFixture<EhrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EhrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EhrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
