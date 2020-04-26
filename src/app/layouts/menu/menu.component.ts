import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {CardService} from '../../services/api/card.service';
import {IType} from '../../interfaces/pokemon-card';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  sidebar: string;
  private types;
  private subtypes;
  private supertypes;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.getMenuItems().then((results: IType[]) => {
        this.types = results[0];
        this.subtypes = results[1];
        this.supertypes = results[2];

        const types = this.types.types.map(type => {
          return {label: type, routerLink: ['/products'], queryParams: {types: type}};
        });
        const subtypes = this.subtypes.subtypes.map(type => {
          return {label: type, routerLink: ['/products'], queryParams: {subtype: type}};
        });
        const supertypes = this.supertypes.supertypes.map(type => {
          return {label: type, routerLink: ['/products'], queryParams: {supertype: type}};
        });

        this.items = [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/products']
          },
          {
            label: 'Types',
            icon: 'fas fa-fire',
            items: types
          },
          {
            label: 'Supertypes',
            icon: 'fab fa-superpowers',
            items: subtypes
          },
          {
            label: 'Subtypes',
            icon: 'fas fa-star',
            items: supertypes
          }
        ];
      }
    );
  }

  private async getMenuItems() {
    const toRun = [
      this.cardService.getTypes(),
      this.cardService.getSubTypes(),
      this.cardService.getSupertypes()
    ];

    return await Promise.all(toRun.map(item => item.toPromise()));
  }
}
