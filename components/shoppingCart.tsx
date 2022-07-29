import React,{useState,useEffect} from "react"
import {useStore} from "../store/store"
const useHasHydrated = () => {
  const [hasHydrated, setHasHydrated] = useState<boolean>(false);
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
};
const ShoppingCart = () => {
  const hasHydrated = useHasHydrated();
  const {cart,removeItemFromCart} = useStore()
  return(
    <div className="mx-2 md:mx-10">
        {hasHydrated && cart.map((product) => (
          <div className="flex flex-col items-end justify-center p-2 px-5 border rounded-md vorder-solid ">
          <div key={product.id} className="flex items-center justify-between">
            <img alt={`${product.name}`} src={`${product.image}`} className="object-cover w-1/6 h-1/6 rounded-md"/>
            <p className="text-2xl">{product.name}</p>
            <p className="text-2xl">{`#${product.id}`}</p>
          </div>
            <button className="w-full mt-5 text-xs btn btn-primary btn-sm md:text-md" onClick={()=> removeItemFromCart(product.id)}>delete from cart</button>

          </div>
        ))}
    </div>
  )
}

export default ShoppingCart
