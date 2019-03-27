import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  items = [];
  totalPrice;
  totalCount;

  constructor(
    private cartService: CartService
  ){}
  ngOnInit(){
    this.cartService.items.subscribe(items => {
      this.items = items;
      this.getTotals();
    });
  }
  getTotals(){
    this.totalPrice = this.items.reduce((sum, item) => sum = item.price * item.quantity + sum, 0);
    this.totalCount = this.items.reduce((count, item) => count =  item.quantity + count, 0);
  }
}
