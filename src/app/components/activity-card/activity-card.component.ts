import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivityDetailsComponent } from '../activity-details/activity-details.component';

@Component({
  selector: 'activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent implements OnInit {
  @Input() activity;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}
  save(){
    this.activity.saved = !this.activity.saved;
  }
  async showDetails(){
    let detailsModal = await this.modalController.create({
      component: ActivityDetailsComponent,
      componentProps: {activity: this.activity}
    });

    return await detailsModal.present();
  }
  
}
