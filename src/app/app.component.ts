import { Component, OnDestroy } from '@angular/core';
import { CART } from './common/constants';
import { Subscription } from 'rxjs';
import { NbdMessageService } from './nbd-messaging.service';

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
      if(routeType.type === 'nav') {
        if(routeType.msg == CART) {
          this.sideNavViewFlag = false;
        } else {
          this.sideNavViewFlag = true;
        }
      } else {
        this.updateCartCount = parseInt(routeType.msg);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
