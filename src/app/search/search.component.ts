import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  plants: any = [
    {
      image: 'fikus.jpeg',
      name: 'fikus'
    },
    {
      image: 'kaktus.jpeg',
      name: 'kaktus'
    },
    {
      image: 'strelicja.jpeg',
      name: 'strelicja'
    },
    {
      image: 'kaktus.jpeg',
      name: 'kaktus'
    },
    {
      image: 'strelicja.jpeg',
      name: 'strelicja'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
