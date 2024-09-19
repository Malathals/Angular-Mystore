import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/dataType';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart-item.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;
  @Output() addedProduct: EventEmitter<Product> = new EventEmitter();

  constructor(private router: Router, private cartService: CartService) {
    this.productItem = {
      id: 1,
      url: '',
      name: '',
      description: '',
      price: 0,
      quantity: 0,
    };
  }

  ngOnInit(): void {}

  addItem(items: Product) {
    items.quantity++;
    return items;
  }

  viewDetails(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  addItemToCart() {
    this.addedProduct.emit(this.productItem);
  }
}
