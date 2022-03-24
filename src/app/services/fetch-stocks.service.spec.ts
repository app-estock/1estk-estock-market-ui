import { TestBed } from '@angular/core/testing';

import { FetchStocksService } from './fetch-stocks.service';

describe('FetchStocksService', () => {
  let service: FetchStocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchStocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
