import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbdShoppingNavComponent } from './nbd-shopping-nav/nbd-shopping-nav.component';
import { NbdShoppingHeaderComponent } from './nbd-shopping-header/nbd-shopping-header.component';
import { NbdShoppingFooterComponent } from './nbd-shopping-footer/nbd-shopping-footer.component';
import { NbdShoppingMainComponent } from './nbd-shopping-main/nbd-shopping-main.component';
import { NbdProductsService } from './shared/services/nbd-products.service';
import { NbdMessageService } from './shared/services/nbd-messaging.service';
import { NbdProductTypeFilterPipe } from './shared/filters/nbd-product-type-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NbdShoppingNavComponent,
    NbdShoppingHeaderComponent,
    NbdShoppingMainComponent,
    NbdProductTypeFilterPipe,
    NbdShoppingFooterComponent,
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
