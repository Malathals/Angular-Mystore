import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/dataType';
import { CartService } from '../../service/cart-item.service';
import { ConformationComponent } from '../conformation/conformation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  selctedProducts: Product[] = [];
  totalPrice: number = 0;
  fullName: string = '';
  address: string = '';
  card: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.selctedProducts = this.cartService.getCartItems();
    console.log('Cart items on Cart page:', this.selctedProducts);
    this.totalPrice = this.cartService.getTotalPrice();
  }

  submitForm() {

    this.router.navigate(['/message'], 
      {
    queryParams: {
        fullName: this.fullName,
        totalPrice: this.totalPrice,
      },
    })
  }

    
  }
