import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbdShoppingMainComponent } from './nbd-shopping-main/nbd-shopping-main.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: NbdShoppingMainComponent },
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
