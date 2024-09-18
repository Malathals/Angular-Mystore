import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/dataType';
import { ProductsService } from '../../service/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  ProductList: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    const products = this.productService.getProduct();
    this.ProductList= products.map(product =>{
      return {...product, quantity: 0};
    })
    
    
    console.log(this.ProductList)
  }
}
