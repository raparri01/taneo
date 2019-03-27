import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss'],
})
export class ActivityDetailsComponent implements OnInit {
  activity;
  percentOff;
  expiresIn = {
    value: 13759900,
    hours: "",
    minutes: "",
    seconds: ""
  };
  recommendationPercent;
  recommendationColor;
  constructor(
    private modalController: ModalController,
    private cartService: CartService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    console.log(this.activity);
    this.expiresIn.seconds = Math.floor(this.expiresIn.value/1000 % 60).toFixed().padStart(2,"0");
    this.expiresIn.minutes = Math.floor(this.expiresIn.value/60000 % 60).toFixed().padStart(2,"0");
    this.expiresIn.hours = Math.floor(this.expiresIn.value/3600000 % 60).toFixed().padStart(2,"0");
    this.percentOff = Math.floor((this.activity.description.value - this.activity.price)/this.activity.description.value * 100)
    setInterval(() => {
      this.expiresIn.value -= 1000;
      this.expiresIn.seconds = Math.floor(this.expiresIn.value/1000 % 60).toFixed().padStart(2,"0");
      this.expiresIn.minutes = Math.floor(this.expiresIn.value/60000 % 60).toFixed().padStart(2,"0");
      this.expiresIn.hours = Math.floor(this.expiresIn.value/3600000 % 60).toFixed().padStart(2,"0");
    }, 1000);
    let positiveReviewCount = this.activity.description.reviews.reduce((positiveReviews, review) => review.recommends ? positiveReviews + 1 : positiveReviews, 0);
    this.recommendationPercent = Math.ceil((positiveReviewCount / this.activity.description.reviews.length) * 100);
    this.recommendationColor = this.recommendationPercent > 50 ? 'success' : 'danger';

  }
  dismiss(){
    this.modalController.dismiss();
  }
  async addToCart(){
    let cartAlert = await this.alertController.create({
      header: 'Add To Cart',
      subHeader: this.activity.name,
      message: 'Add items to your cart',
      inputs:[
        {
          name: 'quantity',
          type: 'number',
          value: 1
        }
      ],
      buttons: [{
        text: "Ok",
        handler: (data) => {
          this.cartService.addToCart({...this.activity, quantity: data.quantity});
          this.modalController.dismiss();
        }
      }, {
        text:"cancel"
      }]
    });

    return await cartAlert.present();
    //this.cartService.addToCart(this.activity);
  }


}
