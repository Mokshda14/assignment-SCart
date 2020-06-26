import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { NbdProductsService } from './nbd-products.service';


describe('NbdProductsService', () => {
  let service: NbdProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [NbdProductsService]
    });
    service = TestBed.inject(NbdProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
