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
  quantity = 1;
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

  }
  dismiss(){
    this.modalController.dismiss();
  }


}
