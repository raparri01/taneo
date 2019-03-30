import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = new BehaviorSubject([]);
  constructor() { }
  
  addToCart(activity){
    let newItems = this.items.value;
    newItems.push(activity);
    this.items.next(newItems);
  }
  updateQuantity(itemId, quantity){
    let index = this.items.value.findIndex(item => item.id === itemId);
    let newItems = this.items.value;
    newItems[index].quantity = quantity;
    this.items.next(newItems);
  }
  removeFromCart(id){
    let index = this.items.value.findIndex(item => item.id === id);
    console.log(index);
    let newItems = this.items.value;
    newItems.splice(index, 1);
    console.log(newItems);
    this.items.next(newItems);
  }
}
