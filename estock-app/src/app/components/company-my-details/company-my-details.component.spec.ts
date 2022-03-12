import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMyDetailsComponent } from './company-my-details.component';

describe('CompanyMyDetailsComponent', () => {
  let component: CompanyMyDetailsComponent;
  let fixture: ComponentFixture<CompanyMyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyMyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
