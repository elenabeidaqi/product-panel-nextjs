
export interface ICounterState {
  count: () => number;
  removeAllCart: () => void;
  cart : any[];
  add: (product: any) => void
  remove: (productId: number) => void,
}
