import {Component, OnInit} from '@angular/core';
import {Cart, Item, PokemonCard} from '../../interfaces/pokemon-card';
import {select, Store} from '@ngrx/store';
import {CardService} from '../../services/api/card.service';
import {Router} from '@angular/router';
import {EditFromCart, RemoveFromCart} from '../../store/cart.actions';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  cart: Cart;
  text: string;

  results: Array<PokemonCard>;

  constructor(private store: Store<{ cart: { items: Array<Item> } }>,
              private cardService: CardService,
              private router: Router) {
    store.pipe(select('cart')).subscribe(cart => {
      this.cart = cart;
    });
  }

  ngOnInit() {
  }

  search($event: any) {
    this.cardService.index(null, {name: $event.query}).toPromise().then(page => {
      this.results = page.data.cards;
    });
  }

  goToDetailPage($event: any) {
    this.router.navigate(['/products', $event.id]);
  }

  removeToCart(item: Item) {
    this.store.dispatch(new RemoveFromCart(Object.assign({}, item)));
  }

  onEditCell(event, item: Item) {
    this.store.dispatch(new EditFromCart(Object.assign({}, {...item, quantity: event.target.value})));
  }
}
