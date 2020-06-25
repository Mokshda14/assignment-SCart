import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbdShoppingMainComponent } from './nbd-shopping-main/nbd-shopping-main.component';


const routes: Routes = [
  { path: '', redirectTo: '/products/All', pathMatch: 'full' },
  { path: 'products/:typeId', component: NbdShoppingMainComponent },
  {
    path: 'shoppingCart',
    loadChildren : () => import('./shopping-cart-module/shopping-cart-module.module').then(m => m.ShoppingCartModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
