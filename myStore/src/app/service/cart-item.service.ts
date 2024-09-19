import { Injectable } from '@angular/core';
import { Product } from '../models/dataType';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    const existingProduct = this.cart.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += product.quantity; // Add the new quantity
    } else {
      this.cart.push({ ...product });
    }

  }

  getCartItems(): Product[] {
    return this.cart;
  }

  deleteProduct(product: Product): void {
    this.cart = this.cart.filter(p => p.id !== product.id);
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (let index = 0; index < this.cart.length; index++) {
      totalPrice += this.cart[index].price * (this.cart[index].quantity || 1);
      
    }
    

    return totalPrice;
  }
 
}
