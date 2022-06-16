import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-plant',
  templateUrl: './my-plant.component.html',
  styleUrls: ['./my-plant.component.scss']
})
export class MyPlantComponent implements OnInit {
  isReminderChecked: boolean = false;
  plants: any = [
    {
      image: 'fikus.jpeg'
    },
    {
      image: 'fikus3.jpeg'
    },
    {
      image: 'fikus2.jpeg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onReminderChange($event: any) {
    this.isReminderChecked = $event.checked;
  }
}
