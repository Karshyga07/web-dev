import { Component, OnInit, signal } from '@angular/core';

import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  protected readonly title = signal('tasks');
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  get filteredProducts() {
    if (!this.selectedCategoryId) return [];
    return this.products.filter(p => p.categoryID === this.selectedCategoryId);
  }

  onProductDeleted(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}