import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ActivityDetailsComponent } from '../components/activity-details/activity-details.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  entryComponents:[
    ActivityDetailsComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    ComponentsModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
