import { Component, OnInit } from '@angular/core';
import { CART } from '../../common/constants';
import { NbdProductsService } from '../../nbd-products.service';
import { NbdMessageService } from '../../nbd-messaging.service';

@Component({
  selector: 'app-nbd-shopping-cart',
  templateUrl: './nbd-shopping-cart.component.html',
  styleUrls: ['./nbd-shopping-cart.component.scss']
})
export class NbdShoppingCartComponent implements OnInit {

  cartProductList: any;
  total: number;

  constructor(
    private messageService: NbdMessageService,
    private productsService: NbdProductsService
  ) {
    this.messageService.sendMessage(CART, 'nav');
   }

   ngOnInit() {
    this.cartProductList = this.productsService.productsForCart;
    this.getTotal();
   }

   getTotal = () => {
    this.total = this.cartProductList.reduce((prev, cur) => { return prev +  (cur.price * cur.buyCount)}, 0);
   }

   removeProduct =(productId) => {
    let indexSelected = this.cartProductList.findIndex(product => product.id === productId);
    this.cartProductList.splice(indexSelected, 1);
    this.productsService.productsMain.map(product => {
      product.id === productId ? product.buyCount = 0 : null;
    })
    this.messageService.sendMessage((this.cartProductList.length).toString(), 'updateCart');
    this.getTotal();
   }

   removeAllProducts = () => {
    this.productsService.productsMain.map(product => {
      product.buyCount = 0;
    })
    this.cartProductList.length = 0;
    this.messageService.sendMessage((this.cartProductList.length).toString(), 'updateCart');
    this.getTotal();
   }

}
