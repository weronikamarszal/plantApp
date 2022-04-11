import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {
  plants: any = [
    {
      image: 'fikus.jpeg'
    },
    {
      image: 'fikus.jpeg'
    },
    {
      image: 'fikus.jpeg'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
