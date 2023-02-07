import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  totalAmount = 0;


  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.calculateTotalAmount();
   }
   calculateTotalAmount() {
    this.totalAmount = this.items.reduce((acc, item) => acc + item.price, 0);
  }
  onSubmit(): void {
    // Process checkout data here

    if (this.cartService.getItemCount() > 0) 
      {
      window.alert('Your order has been submitted successfully');
      }
    else
      {
        window.alert('You should add at least one product to the cart to submit your order')
      }

    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}

