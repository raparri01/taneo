import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ReviewComponent } from './activity-details/review/review.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ActivityCardComponent,
    ActivityDetailsComponent,
    ReviewComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  exports:[
    ActivityCardComponent,
    ActivityDetailsComponent,
    ReviewComponent,
    CartItemComponent
  ]
})
export class ComponentsModule { }
