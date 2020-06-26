import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-module-routing.module';
import { NbdShoppingCartComponent } from './nbd-shopping-cart/nbd-shopping-cart.component';


@NgModule({
  declarations: [NbdShoppingCartComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
