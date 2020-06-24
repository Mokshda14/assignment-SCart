import { TestBed } from '@angular/core/testing';

import { NbdProductsService } from './nbd-products.service';

describe('NbdProductsService', () => {
  let service: NbdProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbdProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
