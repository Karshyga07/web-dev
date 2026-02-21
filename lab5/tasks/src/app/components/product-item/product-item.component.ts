import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  imports: [CurrencyPipe],
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  
 
  likeProduct() {
    this.product.likes++;
    
  }
 
  confirmDelete() {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      this.delete.emit(this.product.id);
    }
  }
  
 
  shareOnWhatsApp() {
    const message = `Посмотри этот товар: ${this.product.name} - ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);
  }
  
  shareOnTelegram() {
    const message = `Посмотри этот товар: ${this.product.name} - ${this.product.link}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`);
  }
}