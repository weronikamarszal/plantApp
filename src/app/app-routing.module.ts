import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {PlantComponent} from "./plant/plant.component";
import {MyPlantComponent} from "./my-plant/my-plant.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
