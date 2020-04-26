export interface ICards {
  cards: Array<PokemonCard>;
}

export interface ICard {
  card: PokemonCard;
}

export interface PokemonCard {
  price: number;
  name: string;
  id: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: Array<string>;
  subtype: string;
  supertype: string;
  ability: Ability;
  hp: string;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks: Array<Attack>;
  text: string;
  weaknesses: Array<Weaknesse>;
  retreatCost: Array<string>;
  resistances: any;
}

export interface Attack {
  cost: Array<string>;
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}

export interface Ability {
  name: string;
  type: string;
  text: string;
}

export interface Weaknesse {
  type: string;
  value: string;
}

export interface IType {
  types?: Array<string>;
  subtypes?: Array<string>;
  supertypes?: Array<string>;
}

export interface Item {
  product: PokemonCard;
  price?: number;
  quantity: number;
}

export interface Cart {
  items: Array<Item>;
  total?: {
    value: number;
    currency?: string;
  };
}
