import { Action } from '@ngrx/store';
import { Item } from '../interfaces/pokemon-card';

export enum ActionTypes {
  Add = '[Card] Add to cart',
  Remove = '[Card] Remove from cart',
  Edit = '[Card] Edit quantity',
}

export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Item) {
  }
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: Item) {
  }
}

export class EditFromCart implements Action {
  readonly type = ActionTypes.Edit;

  constructor(public payload: Item) {
  }
}

export type ActionsUnion = AddToCart | RemoveFromCart | EditFromCart;
