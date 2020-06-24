import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NbdProductsService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(){
    return this.httpClient.get('/assets/data/products.json');
  }
}
