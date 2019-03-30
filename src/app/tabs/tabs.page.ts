import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  badge: number = 0;
  constructor(
    private cartService: CartService
  ){}
  ngOnInit(){
    this.cartService.items.subscribe(data => {
      this.badge = data.length;
    })
  }
}
