import {ActionsUnion, ActionTypes} from './cart.actions';
import {generatePrice, updateTotal} from '../utils/item';

export const initialState = {
  items: [],
  total: {
    value: 0,
    currency: 'euro'
  }
};

export function CartReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {

    case ActionTypes.Add:
      const {id} = action.payload.product;

      // if cart is not empty
      if (state.items.length > 0) {
        const itemInCart = state.items.find(item => item.product.id === id);
        if (itemInCart) {

          const cartItems = state.items.reduce((itemsInCart, item) => {
            if (item.product.id === action.payload.product.id) {
              itemsInCart.push({...item, quantity: itemInCart.quantity + action.payload.quantity}); // Increment qty
            } else {
              itemsInCart.push(item);
            }

            return itemsInCart;
          }, []);

          return updateTotal({...state, items: cartItems});
        } else {
          const price = generatePrice();
          const item = {...action.payload, price};

          return updateTotal({...state, items: [...state.items, item]});
        }
      } else {
        const price = generatePrice();
        const item = {...action.payload, price};

        return updateTotal({...state, items: [...state.items, item]});
      }

    case ActionTypes.Remove:

      return updateTotal({
        ...state, items: state.items.filter(item => {
          return item.product.id !== action.payload.product.id;
        })
      });

    case ActionTypes.Edit:

      const productId = action.payload.product.id;
      const items = state.items.reduce((itemsInCart, item) => {
        if (item.product.id === productId) {
          itemsInCart.push({...item, quantity: action.payload.quantity});
        } else {
          itemsInCart.push(item);
        }

        return itemsInCart;
      }, []);
      return updateTotal({...state, items});

    default:
      return state;
  }
}
