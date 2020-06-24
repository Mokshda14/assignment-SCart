import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbdShoppingNavComponent } from './nbd-shopping-nav/nbd-shopping-nav.component';
import { NbdShoppingHeaderComponent } from './nbd-shopping-header/nbd-shopping-header.component';
import { NbdShoppingCartComponent } from './nbd-shopping-cart/nbd-shopping-cart.component';
import { NbdShoppingMainComponent } from './nbd-shopping-main/nbd-shopping-main.component';
import { NbdProductsService } from './nbd-products.service';

@NgModule({
  declarations: [
    AppComponent,
    NbdShoppingNavComponent,
    NbdShoppingHeaderComponent,
    NbdShoppingCartComponent,
    NbdShoppingMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NbdProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
