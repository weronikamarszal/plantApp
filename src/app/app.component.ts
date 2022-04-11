import {Component} from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: MenuItem[] = [
    {
      icon: 'pi pi-bars',
      items: [
        {
          label: 'Wyszukiwarka',
          routerLink: 'search',
        },
        {
          label: 'Moje rośliny',
          routerLink: 'my-plants',
        },
        {
          label: 'Moje grupy',
          items: [
            {label: 'grupa1', routerLink: 'group1'},
            {label: 'grupa2', routerLink: 'group1'},
            {
              icon: 'pi pi-plus-circle',
              label: 'Dodaj', routerLink: 'add-group'
            },
          ]
        },
        {
          label: 'Dodaj roślinę',
          routerLink: 'add-plant'
        },
        {
          label: 'Harmonogram',
          routerLink: 'calendar'
        },
        {
          label: 'Dziennik upraw',
          routerLink: 'plants-diary'
        },
      ]
    }
  ];

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
