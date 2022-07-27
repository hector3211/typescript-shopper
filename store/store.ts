import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ShoppingCart {
  id: number;
  name: string;
}

interface ShoppingCartState {
  cart: ShoppingCart[];
  addToCart: (name: string) => void;
  removeItemFromCart: (id: number) => void;
  clearCart: () => void;
}
export const useStore = create<ShoppingCartState>()(
  persist(((set) => ({
    cart: [],
    addToCart: (name: string) =>
      set((state: any) => ({
        ...state,
        cart: [
          ...state.cart,
          // try name.name
          { id: Math.round(Math.random() * 100), name: name },
        ],
      })),
    removeItemFromCart: (id: number) =>
      set((state: any) => ({
        ...state,
        cart: state.cart.filter((cartItem: any) => cartItem.id !== id),
      })),
    clearCart: () => set((state) => ({ cart: [] })),
  }))
  
));
