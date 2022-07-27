import create from "zustand";
import {persist} from "zustand/middleware";

interface ThemeState {
  theme: boolean;
  setTheme: (theme: boolean) => void;
}
const useThemeStore = create<ThemeState>()(
  persist(((set) => ({
    theme: true,
    setTheme: (theme: boolean) => set((state) => ({...state, theme: theme})),
  }))),
); 
export default useThemeStore;
