import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ShoppingCart {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ShoppingCartState {
  cart: ShoppingCart[];
  addToCart: (name: string,image:string,price:number) => void;
  removeItemFromCart: (id: number) => void;
}
export const useStore = create<ShoppingCartState>()(
  persist(((set) => ({
    cart: [],
    addToCart: (name: string,image:string,price:number) =>
      set((state: any) => ({
        ...state,
        cart: [
          ...state.cart,
          // try name.name
          { id: Math.round(Math.random() * 100), name: name ,image:image,price:price},
        ],
      })),
    removeItemFromCart: (id: number) =>
      set((state: any) => ({
        ...state,
        cart: state.cart.filter((cartItem: any) => cartItem.id !== id),
      })),
  }))
));
