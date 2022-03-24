import { TestBed } from '@angular/core/testing';

import { SearchCompanyService } from './search-company.service';

describe('SearchCompanyService', () => {
  let service: SearchCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
