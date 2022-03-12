import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListMyViewComponent } from './company-list-my-view.component';

describe('CompanyListMyViewComponent', () => {
  let component: CompanyListMyViewComponent;
  let fixture: ComponentFixture<CompanyListMyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyListMyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyListMyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
