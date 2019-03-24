import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ActivityCardComponent } from '../components/activity-card/activity-card.component';
import { ActivityDetailsComponent } from '../components/activity-details/activity-details.component';
import { ReviewComponent } from '../components/activity-details/review/review.component';

@NgModule({
  entryComponents:[
    ActivityDetailsComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, ActivityCardComponent, ActivityDetailsComponent, ReviewComponent]
})
export class Tab1PageModule {}
