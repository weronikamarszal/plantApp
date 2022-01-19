import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {
  isReminderChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onReminderChange($event: any) {
    this.isReminderChecked = $event.checked;
  }

}
