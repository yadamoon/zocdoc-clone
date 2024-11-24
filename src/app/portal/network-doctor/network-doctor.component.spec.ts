import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkDoctorComponent } from './network-doctor.component';

describe('NetworkDoctorComponent', () => {
  let component: NetworkDoctorComponent;
  let fixture: ComponentFixture<NetworkDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
