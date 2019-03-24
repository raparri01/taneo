import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { activities } from 'src/assets/data/activities'
import { ActivityDetailsComponent } from '../components/activity-details/activity-details.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  activities = [];
  constructor(private modalController: ModalController){

  }
  ngOnInit(){
    this.activities = activities;
  }
  async showDetails(activity){
    let activityModal = await this.modalController.create({
      component: ActivityDetailsComponent,
      componentProps: {activity}
    });

    return await activityModal.present();
  }
}
