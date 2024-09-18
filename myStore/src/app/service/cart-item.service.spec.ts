import { TestBed } from '@angular/core/testing';

import { CartService } from './cart-item.service';

describe('CartItemService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
