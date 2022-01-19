import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {
  isReminderChecked: boolean = false;
  plants: any = [
    {
      image: 'fikus.jpeg'
    },
    {
      image: 'kaktus.jpeg'
    },
    {
      image: 'strelicja.jpeg'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onReminderChange($event: any) {
    this.isReminderChecked = $event.checked;
  }
}
