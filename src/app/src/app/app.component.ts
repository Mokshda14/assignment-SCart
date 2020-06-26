import { Component, OnDestroy } from '@angular/core';
import { CART } from './shared/constants';
import { Subscription } from 'rxjs';
import { NbdMessageService } from './shared/services/nbd-messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'nbd-shopping-cart';
  sideNavViewFlag: boolean;
  subscription: Subscription;
  updateCartCount: number;

  constructor(
    private messageService: NbdMessageService
  ) {
    this.subscription = this.messageService.getMessage().subscribe(routeType => {
        debugger;
        this.updateCartCount = parseInt(routeType.msg);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
