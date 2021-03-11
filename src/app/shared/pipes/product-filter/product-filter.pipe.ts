import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/Product';

@Pipe({
  name: 'productFilter',
  pure: false,
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], categoryId: string = ''): Product[] {
    if (!categoryId.trim()) {
      return products;
    }

    return products.filter((product) => product.categoryId === categoryId);
  }
}
