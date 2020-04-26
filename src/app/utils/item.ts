import {Cart} from '../interfaces/pokemon-card';

// generate price for item in cart
export function generatePrice(): number {
  return Math.ceil(Math.random() * 100);
}

// update total when item is added/removed in cart
export function updateTotal(cart: Cart): Cart {
  const {items} = cart;
  const somme = items.reduce(
    (total, item) => total + (item.price * item.quantity), 0);
  return {...cart, total: {value: somme}};
}
