import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbdShoppingNavComponent } from './nbd-shopping-nav/nbd-shopping-nav.component';
import { NbdShoppingHeaderComponent } from './nbd-shopping-header/nbd-shopping-header.component';
import { NbdShoppingMainComponent } from './nbd-shopping-main/nbd-shopping-main.component';
import { NbdProductsService } from './nbd-products.service';
import { NbdMessageService } from './nbd-messaging.service';
import { NbdProductTypeFilterPipe } from './nbd-product-type-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NbdShoppingNavComponent,
    NbdShoppingHeaderComponent,
    NbdShoppingMainComponent,
    NbdProductTypeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NbdProductsService, NbdMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
