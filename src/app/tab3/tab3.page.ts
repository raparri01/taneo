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
    this.items = this.cartService.items;
    console.log(this.items);
  }
  getTotals(){
    this.totalPrice = this.items.reduce((item, sum) => sum = item.price * item.quantity + sum, 0);
    this.totalCount = this.items.reduce((item, count) => count =  item.quantity + count, 0);
  }
}
