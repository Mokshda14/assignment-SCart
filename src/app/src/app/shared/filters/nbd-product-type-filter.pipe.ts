import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nbdProductTypeFilter'
})
export class NbdProductTypeFilterPipe implements PipeTransform {

  transform(products: any[], productType: number): unknown {
    return productType === 0
      ? products
      : products.filter(product => product.typeId === productType);
  }

}
