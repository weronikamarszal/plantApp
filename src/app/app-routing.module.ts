import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {PlantComponent} from "./plant/plant.component";
import {MyPlantComponent} from "./my-plant/my-plant.component";
import {MyPlantsComponent} from "./my-plants/my-plants.component";
import {AddPlantComponent} from "./add-plant/add-plant.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {PlantsDiaryComponent} from "./plants-diary/plants-diary.component";
import {GroupComponent} from "./group/group.component";
import {AddGroupComponent} from "./add-group/add-group.component";
import {EditGroupComponent} from "./edit-group/edit-group.component";

const routes: Routes = [
  {
    component: SearchComponent,
    path: 'search'
  },
  {
    component: SearchResultComponent,
    path: 'search-result'
  },
  {
    component: PlantComponent,
    path: 'plant'
  },
  {
    component: MyPlantComponent,
    path: 'my-plant'
  },
  {
    component: MyPlantsComponent,
    path: 'my-plants'
  },
  {
    component: AddPlantComponent,
    path: 'add-plant'
  },
  {
    component: PlantsDiaryComponent,
    path: 'plants-diary'
  },
  {
    component: CalendarComponent,
    path: 'calendar'
  },
  {
    component: GroupComponent,
    path: 'group1'
  },
  {
    component: AddGroupComponent,
    path: 'add-group'
  },
  {
    component: EditGroupComponent,
    path: 'edit-group'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
