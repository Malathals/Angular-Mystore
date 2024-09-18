import { Injectable } from '@angular/core';
import { Product } from '../models/dataType';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    this.cart.push({ ...product });
    console.log('Product added to cart:', this.cart); 
  }

  getCartItems(): Product[] {
    return this.cart;
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (let index = 0; index < this.cart.length; index++) {
      totalPrice += this.cart[index].price * (this.cart[index].quantity || 1);
    }

    return totalPrice;
  }
}
