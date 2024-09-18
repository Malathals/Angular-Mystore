import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/dataType';
import { url } from 'inspector';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;

  constructor() {
    this.productItem = {
      id: 1,
      url: '',
      name: '',
      description: '',
      price: 0,
      quantity:0
    };
  }

  ngOnInit(): void {}

  addItem(items: Product)
  {
    items.quantity+=1
    console.log("hi")
  }

}
