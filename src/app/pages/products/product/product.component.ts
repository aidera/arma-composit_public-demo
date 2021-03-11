import { Component, Input } from '@angular/core';

import { Product } from '../../../shared/models/Product';
import { Category } from '../../../shared/models/Category';
import { TranslateService } from '../../../shared/services/translate/translate.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product;
  @Input() category: Category;
  @Input() isLoading: boolean;

  constructor(public translateService: TranslateService) {}
}
