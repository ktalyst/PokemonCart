import {Component, OnInit, ViewChild} from '@angular/core';
import {ICards} from '../../../interfaces/pokemon-card';
import {CardService} from '../../../services/api/card.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Paginator} from 'primeng/paginator';
import {Store} from '@ngrx/store';
import {Page} from '../../../interfaces/pagination';
import {AddToCart} from '../../../store/cart.actions';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChild('paginator', {static: false}) paginator: Paginator;

  page: Page<ICards>;
  params;
  private noPaginate = false;

  constructor(private cardService: CardService,
              private route: ActivatedRoute,
              private store: Store<{ cart: [] }>,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.params = params;
        this.getProducts().then((page: Page<ICards>) => {
          this.page = page;
          this.noPaginate = true;
          this.paginator.changePage(0);
          this.noPaginate = false;
        });
      }
    );
  }

  async paginate($event: any) {
    if (!this.noPaginate) {
      const page = $event.page + 1;
      const params = {...{page}, ...this.params};

      this.page = await this.cardService.index(null, params).toPromise();
    }
  }

  addToCart(product: any) {
    const quantity = 1;
    this.store.dispatch(new AddToCart(Object.assign({}, {product, quantity})));
    this.messageService.add({
      severity: 'success',
      summary: 'Add to cart',
      detail: `The product ${product.name} has been added to the cart`
    });
  }

  private async getProducts() {
    return await this.cardService.index(null, this.params).toPromise();
  }
}
