import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgIf, NgFor } from '@angular/common';

import { ProductItemComponent } from '../product-item/product-item.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [NgIf, NgFor, ProductItemComponent]
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() productDeleted = new EventEmitter<number>();
  
  onDeleteProduct(productId: number) {
    this.productDeleted.emit(productId);
  }
}