import {Action} from '@ngrx/store';

export enum ActionTypes {
  Show = '[Loader] Show loader action',
  Hide = '[Loader] Hide loader action',
}

export class ShowLoader implements Action {
  readonly type = ActionTypes.Show;

  constructor() {
  }
}

export class HideLoader implements Action {
  readonly type = ActionTypes.Hide;

  constructor() {
  }
}

export type ActionsUnion = ShowLoader | HideLoader;
