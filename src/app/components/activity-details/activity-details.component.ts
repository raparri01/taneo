import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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
    private modalController: ModalController
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


}
