import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {HideLoader, ShowLoader} from '../store/loader.actions';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor(
    public store: Store
  ) {}
  show() {
    this.store.dispatch(new ShowLoader());
  }
  hide() {
    this.store.dispatch(new HideLoader());
  }
}
