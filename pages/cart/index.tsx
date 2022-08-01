import React,{useEffect,useState} from "react"
import Nav from "../../components/nav"
import ShoppingCart from "../../components/shoppingCart"
import useThemeStore from "../../store/theme"
export default function Cart(){
  const theme = useThemeStore((state) => state.theme)
  console.log(theme)
const useHydrated = () =>{
  const [hasHydrated, setHydrated] = useState<boolean>(false);
  const themeState = useThemeStore((state) => state.theme);
  useEffect(() => {
    setHydrated(true);
  },[themeState]);
  return hasHydrated;
}
  const hasHydrated = useHydrated();
  return (
    <div data-theme={(hasHydrated && theme ? "dark":"light")}>
      <Nav/>
      <div className="pt-20">
        <ShoppingCart/>
      </div>
    </div>
  )
}
