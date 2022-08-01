import React,{useState,useEffect} from "react"
import {useStore} from "../store/store"
import {useSession,signIn} from "next-auth/react"
const useHasHydrated = () => {
  const [hasHydrated, setHasHydrated] = useState<boolean>(false);
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
};
const ShoppingCart = () => {
  const {data:session} = useSession()
  const hasHydrated = useHasHydrated();
  const {cart,removeItemFromCart} = useStore()
  const [toast,setToast] = useState<boolean>(false)
  const handleCheckOut = () =>{
    if(!session?.user){
      setInterval(()=>setToast(true),400)
    }else{
      setToast(false)
    }
  }
  return(
    <div className="relative min-h-screen mx-2 md:px-5">
        {hasHydrated && cart.map((product) => (
          <div className="flex flex-col items-center items-end justify-center p-2 px-5 border rounded-md vorder-solid ">
            <div key={product.id} className="flex flex-col items-center justify-between w-full md:flex-row">
            <img alt={`${product.name}`} src={`${product.image}`} className="object-cover w-2/5 mt-1 md:w-1/4 rounded-md"/>
              <p className="my-1 text-2xl">{product.name}</p>
            <p className="my-1 text-2xl">{`$${product.price}`}</p>
          </div>
            <button className="w-full mt-5 text-xs btn btn-primary btn-sm md:text-md" onClick={()=> removeItemFromCart(product.id)}>delete from cart</button>
          </div>
        ))}
      <div className="relative flex items-center justify-between pb-2 mt-5">
          <div className="flex">
            <p className="px-2 text-2xl">Total:</p>
            <p className="text-2xl">{`$${hasHydrated && cart.reduce((acc,product)=> acc + product.price,0).toFixed(2)}`}</p>
          </div>
        <button onClick={handleCheckOut} className="btn btn-accent">Check out</button>
        {toast &&
          <div className="absolute bottom-0 shadow-lg max-w-14 alert alert-error">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Error! Not logged in.</span>
              <span className="ml-4 font-bold underline underline-offset-4 decoration-1 ">
                <a href={"/api/auth/signIn"} onClick={() => signIn()}>Log in</a>
              </span>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ShoppingCart
