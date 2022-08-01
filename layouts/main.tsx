import React,{useState,useEffect} from "react"
import NextHead from "next/head";
import useThemeStore from "../store/theme";
const useHydrated = () =>{
  const [hasHydrated, setHydrated] = useState<boolean>(false);
  const themeState = useThemeStore((state) => state.theme);
  useEffect(() => {
    setHydrated(true);
  },[themeState]);
  return hasHydrated;
}
interface Props {
  children: React.ReactNode;
}
const Main: React.FC <Props> = ({ children }) => {
  const hasHydrated = useHydrated();
  const themeState = useThemeStore((state) => state.theme)
  return (
    <div className="min-h-screen">
      <NextHead>
        <title>shopper</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </NextHead>
      <main data-theme={(hasHydrated && themeState ? "dark":"light")} className="max-w-full box-border">
        {children}
      </main>
    </div>
  )
}
export default Main;
