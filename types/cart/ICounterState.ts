import { IProducts } from "../products/Iproducts";

export interface ICounterState {
  count: () => number;
  removeAllCart: () => void;
  cart : IProducts[];
  add: (product: IProducts) => void;
  remove: (productId: number) => void;
}
