import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZocdocSolutionsComponent } from './zocdoc-solutions.component';

describe('ZocdocSolutionsComponent', () => {
  let component: ZocdocSolutionsComponent;
  let fixture: ComponentFixture<ZocdocSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZocdocSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZocdocSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
