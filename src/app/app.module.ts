import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PlantComponent } from './plant/plant.component';
import { MyPlantComponent } from './my-plant/my-plant.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {MultiSelectModule} from "primeng/multiselect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "primeng/carousel";
import {InputSwitchModule} from "primeng/inputswitch";
import {MenubarModule} from "primeng/menubar";
import { MyPlantsComponent } from './my-plants/my-plants.component';
import { AddPlantComponent } from './add-plant/add-plant.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormFieldModule} from "../common/components/form-field/form-field.component";
import {DividerModule} from "primeng/divider";
import {FileUploadModule} from "primeng/fileupload";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    PlantComponent,
    MyPlantComponent,
    MyPlantsComponent,
    AddPlantComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    MultiSelectModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
