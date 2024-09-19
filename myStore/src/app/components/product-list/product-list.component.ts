import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/dataType';
import { ProductsService } from '../../service/products.service';
import { CartService } from '../../service/cart-item.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  ProductList: Product[] = [];
  errorMessage: string = '';

  constructor(private productService: ProductsService, private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProduct().subscribe(
      (res) => {
        for (let index = 0; index < res.length; index++) {
          const products = res[index];
          products['quantity'] = 1;
        }

        this.ProductList = res;
        console.log(this.ProductList[5].quantity)
      })

  }
  addedProduct(event: Product) {
    this.cartService.addToCart(event);
  }
}
