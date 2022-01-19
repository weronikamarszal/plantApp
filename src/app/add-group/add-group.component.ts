import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
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
