import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NbdProductsService {

  productsForCart: any[] = [];

  constructor(private httpClient: HttpClient) { }

  public getProducts(){
    return this.httpClient.get('/assets/data/products.json');
  }
}
