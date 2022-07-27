import React,{useState} from "react"
import {BsMoon,BsSun} from "react-icons/bs"
import {signIn,signOut,useSession} from "next-auth/react"
import useThemeStore from "../store/theme"

const Nav = () => {
  const {theme,setTheme} = useThemeStore()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false) 
  const [userInfo, setUserInfo] = useState<boolean>(false)
  const { data: session, status } = useSession();
  
  return (
    <div className=" navbar md:px-20">
      <div className="flex-1">
        <a className="mx-2 text-xl text-2xl font-bold normal-case btn btn-ghost">Shopper</a>
        <label className="swap swap-rotate">
            <input type="checkbox" />
          {theme ? (
            <button onClick={()=> setTheme(false)}>{
            <BsSun className="w-10 h-10 swap-inner" />
            }</button>
          ):(
            <button onClick={()=> setTheme(true)}>{
            <BsMoon className="w-10 h-10 swap-inner" />
            }</button>
          )}
        </label>
      </div>
      <div className="relative flex-none mr-2">
      {session && (
        <>
        <div className="avatar">
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
        <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className="mx-2 btn btn-outline">
          Menu
        </button>
        {isMenuOpen && (
          <div className={theme ? (
            "text-white"
          ):(
            "text-black"
          )}>
          <ul className="absolute right-0 p-2 mt-3 shadow bg-base-100 top-10 menu menu-compact dropdown-content rounded-box w-52">
            <li><a href={"/"}>Home</a></li>
            <li><a href={"/products"}>Products</a></li>
            <li><a href={"/cart"}>Cart</a></li>
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
