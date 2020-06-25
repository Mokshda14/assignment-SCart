import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbdShoppingCartComponent } from './nbd-shopping-cart/nbd-shopping-cart.component';

const routes: Routes = [
  { path: '', component: NbdShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
