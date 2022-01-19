import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-plants-diary',
  templateUrl: './plants-diary.component.html',
  styleUrls: ['./plants-diary.component.scss']
})
export class PlantsDiaryComponent implements OnInit {
  events: any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.events = [
      {status: 'Dodano roślinę: Kaktus', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},
      {status: 'Podlano rośliny z grupy: Salon', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
      {status: 'Podlano roślinę: Paprotka', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
      {status: 'Dodano nowe zdjęcie do rośliny: Monstera', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
    ];
  }

}
