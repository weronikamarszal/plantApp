import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
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

}
