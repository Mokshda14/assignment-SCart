import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { NbdProductsService } from '../nbd-products.service';
import { NbdMessageService } from '../nbd-messaging.service';
import { CATEGORIES, PRODUCT } from '../common/constants';

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
        const product = CATEGORIES.find(category => category.type === params.typeId);
        this.selectedType = parseInt(product.id);
        this.messageService.sendMessage(PRODUCT + '__' + params.typeId, 'nav');
      }
    );
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: any)=>{
      this.products = data.products;
      this.products.map(product => product.buyCount = 0);
    })
  }


  addProduct = (productId) => {
    const productSelected = this.products
      .find(product => product.id === productId);
    productSelected.buyCount++;
    this.updateCart();
  }

  reduceProduct = (productId) => {
    const productSelected = this.products
      .find(product => product.id === productId);
    productSelected.buyCount--;
    this.updateCart();
  }


  updateCart = () => {
    const cartProduct = this.products.filter(product => product.buyCount != 0);
    this.messageService.sendMessage((cartProduct.length).toString(), 'updateCart');
    this.productsService.productsForCart = [...cartProduct] 
  }

}
