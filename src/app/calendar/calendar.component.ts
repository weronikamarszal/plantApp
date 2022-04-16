import {
  Component,
  OnInit,
} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { WateringReminder } from '../../model/reminder.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    firstDay: 1,
    dateClick: event => {
      console.log(event);
      this.newReminderValue = new WateringReminder({ start: event.date });
      this.isRemindActive = true;
    },
    initialEvents: [
      {
        id: '1',
        start: '2022-04-05',
        className: 'water-event fa fa-tint'
      },
      {
        id: '2',
        start: '2022-04-12',
        className: 'water-event fa fa-tint'
      },
      {
        id: '3',
        start: '2022-04-19',
        className: 'water-event fa fa-tint'
      },
      {
        id: '4',
        start: '2022-04-26',
        className: 'water-event fa fa-tint'
      },
    ],
  };

  isRemindActive = false;

  newReminderValue = new WateringReminder();

  constructor() {
  }

  ngOnInit(): void {
  }

}
