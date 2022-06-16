import {
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  filterValue = {
    name:'',
    tags: [],
  }

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
  tagOptions = [{name: 'Duże', id: 1},{name: 'Małe', id: 2}];

  searchResult = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  /**
   * <kod 2>
   */
  search() {
    this.httpClient.get<any>(this.parseFilterValue())
      .subscribe(response => this.searchResult = response)
  }

  parseFilterValue() {
    return `/api/plants?join=tags&filter=name||$contL||${this.filterValue.name}&filter=tags.id||$in||${this.filterValue.tags}`
  }
}
