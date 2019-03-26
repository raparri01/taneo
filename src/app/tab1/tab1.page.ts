import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { activities } from "src/assets/data/activities";
import { ActivityDetailsComponent } from "../components/activity-details/activity-details.component";
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  activities = [];
  filteredActivities = [];
  categories = [];
  searchQuery = "";

  constructor(private modalController: ModalController) {}
  ngOnInit() {
    this.activities = activities;
  }
  async showDetails(activity) {
    let activityModal = await this.modalController.create({
      component: ActivityDetailsComponent,
      componentProps: { activity }
    });

    return await activityModal.present();
  }
  search() {
    if (this.filteredActivities.length > 0) {
      this.filteredActivities = this.filteredActivities.filter(activity => {
        if (activity.name.indexOf(this.searchQuery) > -1) {
          return activity;
        }
      });
    } else {
      this.filteredActivities = this.activities.filter(activity => {
        if (activity.name.indexOf(this.searchQuery) > -1) {
          return activity;
        }
      });
    }
  }
  addCategory() {
    this.categories = ["Dinner"];
    if (this.filteredActivities.length > 0) {
      this.filteredActivities = this.filteredActivities.filter(activity => {
        var hasCategories = false;
        for (let i = 0; i < this.categories.length; i++) {
          if (activity.categories.indexOf(this.categories[i]) > -1) {
            hasCategories = true;
            break;
          }
        }
        if (hasCategories) {
          return activity;
        }
      });
    } else {
      this.filteredActivities = this.activities.filter(activity => {
        var hasCategories = false;
        for (let i = 0; i < this.categories.length; i++) {
          if (activity.categories.indexOf(this.categories[i]) > -1) {
            hasCategories = true;
            break;
          }
        }
        if (hasCategories) {
          return activity;
        }
      });
    }
  }
  removeFilter(category){
    this.categories.splice(this.categories.indexOf(category), 1);
  }
}
