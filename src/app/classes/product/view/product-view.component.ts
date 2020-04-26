import {Component, OnInit} from '@angular/core';
import {CardService} from '../../../services/api/card.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ICard, Item, PokemonCard} from '../../../interfaces/pokemon-card';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddToCart, EditFromCart} from '../../../store/cart.actions';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  product: PokemonCard;
  form: FormGroup;
  isReady = false;
  private id: any;
  private isInCart: any;

  constructor(private route: ActivatedRoute,
              private cardService: CardService,
              private fb: FormBuilder,
              private store: Store<{ cart: { items: Array<Item> } }>) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params: Params) => {
        this.id = params.params.id;
        this.getProduct(this.id).then((iCard: ICard) => {
            this.product = iCard.card;
            this.buildForm();
            this.isReady = true;
            this.store.pipe(select('cart')).subscribe(cart => {
              this.isInCart = cart.items.find(item => item.product.id === this.product.id);
            });
          }
        );
      }
    );
  }

  addToCart() {
    if (this.isInCart) {
      this.store.dispatch(new EditFromCart(Object.assign({}, this.form.value)));
    } else {
      this.store.dispatch(new AddToCart(Object.assign({}, this.form.value)));
      this.isInCart = true;
    }
  }

  private async getProduct(id) {
    return await this.cardService.show(id).toPromise();
  }

  private buildForm() {
    this.form = this.fb.group({
      quantity: [1, Validators.required],
      product: [this.product]
    });
  }
}
