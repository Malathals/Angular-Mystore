import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../models/dataType';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../service/cart-item.service';


@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrl: './product-item-details.component.css',
})
export class ProductItemDetailsComponent implements OnInit {
  productId: number;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) {
    (this.productId = 0),
      (this.product = {
        id: 1,
        url: '',
        name: '',
        description: '',
        price: 0,
        quantity: 1,
      });
  }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct().subscribe((res) => {
      const filteredProducts = res.filter((p) => p.id === this.productId);

      this.product = filteredProducts[0];
      this.product.quantity = this.product.quantity || 1;
      if (!this.product) {
        console.error('Product not found');
      }
    });
  }

  addToCart(selectedProduct: Product) {
    this.cartService.addToCart(selectedProduct);
    alert(" the product had been added successfully")

  }
}
