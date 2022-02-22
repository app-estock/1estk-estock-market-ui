import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySearchViewComponent } from './company-search-view.component';

describe('CompanySearchViewComponent', () => {
  let component: CompanySearchViewComponent;
  let fixture: ComponentFixture<CompanySearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySearchViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
