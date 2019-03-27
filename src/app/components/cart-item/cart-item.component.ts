import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {

  }
  updateQuantity(){
    this.cartService.updateQuantity(this.item.id, this.item.quantity);
  }

}
