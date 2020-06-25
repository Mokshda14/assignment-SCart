import { Component, Input } from '@angular/core';
import { CATEGORIES, CART } from '../common/constants';

@Component({
  selector: 'app-nbd-shopping-nav',
  templateUrl: './nbd-shopping-nav.component.html',
  styleUrls: ['./nbd-shopping-nav.component.scss']
})
export class NbdShoppingNavComponent {

  @Input() selectedId: number;
  categories = CATEGORIES;

  constructor() { }
  

  typeSelected = (typeIdSelected) => {
    this.selectedId = typeIdSelected;
  }

}
