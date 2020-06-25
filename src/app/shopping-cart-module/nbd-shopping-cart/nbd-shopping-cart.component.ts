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
    this.cartProductList = [...this.productsService.productsForCart];
    this.total = this.cartProductList.reduce((prev, cur) => { return prev +  (cur.price * cur.buyCount)}, 0);
   }

}
