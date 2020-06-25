import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CATEGORIES, CART } from '../common/constants';
import { NbdMessageService } from '../nbd-messaging.service';

@Component({
  selector: 'app-nbd-shopping-nav',
  templateUrl: './nbd-shopping-nav.component.html',
  styleUrls: ['./nbd-shopping-nav.component.scss']
})
export class NbdShoppingNavComponent implements OnDestroy{

  categories = CATEGORIES;
  selectedId: any;
  subscription: Subscription;

  constructor(
    private messageService: NbdMessageService
  ) {
    this.subscription = this.messageService.getMessage().subscribe(routeType => {
      if(routeType.type === 'nav') {
        if(routeType.msg !== CART) {
          const product = CATEGORIES.find(category => category.type === routeType.msg.split('__')[1]);
          this.selectedId = parseInt(product.id);
        }
      }
    });
  }

  typeSelected = (typeIdSelected) => {
    this.selectedId = typeIdSelected;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
