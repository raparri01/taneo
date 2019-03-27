import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() { }
  addToCart(activity){
    this.items.push(activity);
  }
}
