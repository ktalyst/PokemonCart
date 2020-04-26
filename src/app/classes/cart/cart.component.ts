import {Component, OnInit} from '@angular/core';
import {Cart, Item} from '../../interfaces/pokemon-card';
import {select, Store} from '@ngrx/store';
import {RemoveFromCart} from '../../store/cart.actions';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;
  activeStep = 0;
  steps: MenuItem[];

  constructor(private store: Store<{ cart: { items: Array<Item> } }>) {
    store.pipe(select('cart')).subscribe(cart => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
    this.steps = [{
      label: 'Cart',
      command: () => {
        this.activeStep = 0;
      }
    },
      {
        label: 'Seat',
        command: (event: any) => {
          this.activeStep = 1;
        }
      },
      {
        label: 'Payment',
        command: (event: any) => {
          this.activeStep = 2;
        }
      },
      {
        label: 'Confirmation',
        command: (event: any) => {
          this.activeStep = 3;
        }
      }
    ];
  }

  removeToCart(item: Item) {
    this.store.dispatch(new RemoveFromCart(Object.assign({}, item)));
  }

  nextStep() {
    this.activeStep = this.activeStep + 1;
  }
}
