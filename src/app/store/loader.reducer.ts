import {ActionsUnion, ActionTypes} from './loader.actions';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0
};

export function LoaderReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {

    case ActionTypes.Show:
      return {
        counter: state.counter + 1
      };
    case ActionTypes.Hide:
      return {
        counter: state.counter > 0 ? state.counter - 1 : 0
      };
    default:
      return state;
  }
}
