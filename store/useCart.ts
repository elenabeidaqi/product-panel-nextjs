import { ICounterState } from "@/types/cart/ICounterState";
import { create } from "zustand";

export const useCart = create<ICounterState>((set, get) => ({
  cart: [], // initial state
  count: () => {
    const { cart } = get();
    if (cart.length)
      return cart.map((item) => item.count).reduce((prev, curr) => prev + curr);
    else return 0;
  },
  add: (product) => {
    const { cart } = get();
    const updatedCart = updateCart(product, cart);
    set({ cart: updatedCart });
  },
  remove: (productId: number) => {
    const { cart } = get();
    const removedCart = removeCart(productId, cart);
    set({ cart: removedCart });
  },
  removeAllCart: () => set({ cart: [] }),
}));

function updateCart(product: any, cart: any[]) {
  const cartItem = { ...product, count: 1 };
  const productOnCart = cart.map((item) => item.id).includes(product.id);
  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id) return { ...item, count: item.count + 1 };
      return item;
    });
  }
  return cart;
}

function removeCart(productId: number, cart: any[]) {
  return cart
    .map((item) => {
      if (item.id === productId) return { ...item, count: item.count - 1 };
      return item;
    })
    .filter((item) => {
      return item.count;
    });
}
