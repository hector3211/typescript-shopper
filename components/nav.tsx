import React,{useState,useEffect} from "react"
import {BsMoon,BsSun} from "react-icons/bs"
import {FiShoppingCart} from "react-icons/fi"
import {signIn,signOut,useSession} from "next-auth/react"
import useThemeStore from "../store/theme"
import {useStore} from "../store/store"
const useHasHydrated = () => {
  const [hasHydrated, setHasHydrated] = useState<boolean>(false);
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
};
const Nav = () => {
  const [navBlur,setNavBlur] = useState<boolean>(false)
  const hasHydrated = useHasHydrated();
  const {theme,setTheme} = useThemeStore()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false) 
  const [userInfo, setUserInfo] = useState<boolean>(false)
  const { data: session, status } = useSession();
  const {cart}  = useStore()  
  const navbarBlurEffect = () =>{
    if(window.scrollY > 50){
      setNavBlur(true)
    }else{
      setNavBlur(false)
    }
  }
  if (typeof window !== "undefined"){
    window.addEventListener("scroll",navbarBlurEffect)
  }
  return (
    <div className={`fixed navbar z-50 md:px-20 ${(navBlur ? ("backdrop-blur-lg bg-gray-900 bg-opacity-50"):("bg-gray-500"))}`}>
      <div className="flex-1">
        <a href={"/"} className="mx-2 text-xl text-2xl font-bold normal-case btn btn-ghost">Shopper</a>
        <label className="swap swap-rotate">
            <input type="checkbox" />
          {theme ? (
            <button onClick={()=> setTheme(false)}>{
            <BsSun className="w-8 h-8 swap-inner" />
            }</button>
          ):(
            <button onClick={()=> setTheme(true)}>{
            <BsMoon className="w-8 h-8 swap-inner" />
            }</button>
          )}
        </label>
      </div>
      <div className="relative flex-none mr-2">
      {session && (
        <>
        <div className="avatar online">
          <div className="w-10 mr-2 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
          <button onClick={() => setUserInfo(!userInfo)}>
            <img src={session?.user.image} alt="avatar"/>
          </button>
          </div>
        </div>
        {userInfo && (
          <ul className="absolute flex w-56 p-2 mt-3 shadow right-20 bg-base-100 top-10 menu menu-compact dropdown-content rounded-box">
          <li>{`Email: ${session?.user.email}`}</li>
          <li>{`User: ${session?.user.name}`}</li>
          </ul>
        )}
        </>
      )}
        {hasHydrated && cart.length > 0 && (
        <div className="absolute flex items-center justify-center w-4 h-4 text-center bg-red-500 rounded-full right-24 top-1">{cart.length}</div>
        )}
        <a className="mx-2 " href={"/cart"}>{<FiShoppingCart className="w-8 h-8"/>}</a>
        <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className="mx-2 btn btn-outline">
          Menu
        </button>
        {isMenuOpen && (
          <div className={theme ? (
            "text-white"
          ):(
            "text-black"
          )}>
          <ul className="absolute right-0 p-2 mt-3 bg-gray-500 shadow top-14 menu menu-compact dropdown-content rounded-box w-52">
            <li><a href={"/"}>Home</a></li>
            {!session ? (
              <li><a href={"/api/auth/signin"} onClick={()=> signIn()}>Log in</a></li>
            ):(

              <li><a href={"/api/auth/signout"} onClick={()=> signOut()}>Log out</a></li>
            )}
          </ul>
          </div>
        )}
      </div>
    </div>
  )
}
export default Nav;
