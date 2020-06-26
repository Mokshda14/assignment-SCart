import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { NbdProductsService } from '../shared/services/nbd-products.service';
import { NbdMessageService } from '../shared/services/nbd-messaging.service';
import { CATEGORIES, PRODUCT } from '../shared/constants';

@Component({
  selector: 'app-nbd-shopping-main',
  templateUrl: './nbd-shopping-main.component.html',
  styleUrls: ['./nbd-shopping-main.component.scss']
})
export class NbdShoppingMainComponent implements OnInit {

  products: any[];
  selectedType: number = 0;

  constructor(
    private productsService: NbdProductsService,
    private route: ActivatedRoute,
    private messageService: NbdMessageService
  ) {
    this.route.params.subscribe( params => {
        if(params && params.typeId) {
          const product = CATEGORIES.find(category => {
            return category.type === params.typeId
          });
          this.selectedType = parseInt(product.id);
        } else {
          this.selectedType = 1;
        }
      }
    );
  }

  ngOnInit(): void {
    if(this.productsService.productsMain && this.productsService.productsMain.length === 0) {
      this.productsService.getProducts().subscribe((data: any)=>{
        this.products = this.productsService.productsMain = data.products;
        this.products.map(product => product.buyCount = 0);
      })
    } else {
      this.products = this.productsService.productsMain;
    }
  }


  addProduct = (productId) => {
    const productSelectedId = this.products
      .findIndex(product => product.id === productId);
    this.products[productSelectedId].buyCount++;
    this.updateCart();
  }

  reduceProduct = (productId) => {
    const productSelectedId = this.products
      .findIndex(product => product.id === productId);
    this.products[productSelectedId].buyCount--;
    this.updateCart();
  }


  updateCart = () => {
    const cartProduct = this.products.filter(product => {
      return product.buyCount != 0;
    });
    this.messageService.sendMessage((cartProduct.length).toString(), 'updateCart');
    this.productsService.productsForCart = [...cartProduct] 
  }

}
