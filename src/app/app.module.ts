import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {PlantComponent} from './plant/plant.component';
import {MyPlantComponent} from './my-plant/my-plant.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {MultiSelectModule} from "primeng/multiselect";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "primeng/carousel";
import {InputSwitchModule} from "primeng/inputswitch";
import {MenubarModule} from "primeng/menubar";
import {MyPlantsComponent} from './my-plants/my-plants.component';
import {AddPlantComponent} from './add-plant/add-plant.component';
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormFieldModule} from "../common/components/form-field/form-field.component";
import {DividerModule} from "primeng/divider";
import {FileUploadModule} from "primeng/fileupload";
import {HttpClientModule} from "@angular/common/http";
import {CalendarComponent} from './calendar/calendar.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {DialogModule} from "primeng/dialog";
import {CalendarModule} from "primeng/calendar";
import {PlantsDiaryComponent} from './plants-diary/plants-diary.component';
import {TimelineModule} from "primeng/timeline";
import {GroupComponent} from './group/group.component';
import {AddGroupComponent} from './add-group/add-group.component';
import {CheckboxModule} from "primeng/checkbox";
import {EditGroupComponent} from './edit-group/edit-group.component';
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
]);


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    PlantComponent,
    MyPlantComponent,
    MyPlantsComponent,
    AddPlantComponent,
    CalendarComponent,
    PlantsDiaryComponent,
    GroupComponent,
    AddGroupComponent,
    EditGroupComponent
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
export class AppModule {
}
