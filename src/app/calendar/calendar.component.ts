import { Component, OnInit } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import {WateringReminder} from "../../model/reminder.model";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: event => {
      console.log(event)
      this.newReminderValue = new WateringReminder({start: event.date})
      this.isRemindActive = true;
    }
  };

  isRemindActive = false;

  newReminderValue = new WateringReminder();

  constructor() { }

  ngOnInit(): void {
  }

}
