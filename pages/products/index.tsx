import React,{useState,useEffect,useRef} from "react"
import Nav from "../../components/nav"
import { useStore } from "../../store/store";
const useHasHydrated = () => {
  const [hasHydrated, setHasHydrated] = useState<boolean>(false);
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
};

export default function Products(){
  const hasHydrated = useHasHydrated();
  const { addToCart, removeItemFromCart, cart} = useStore();
  const [product, setProduct] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Nav/>
      <h1 className="font-bold">Products</h1>
      <div className="flex flex-col ">
        <h3 className="text-3xl">Shopping Cart</h3>
        <input
          ref={ref}
          type="text"
          placeholder="enter product"
          className="p-5 text-black border border-solid rounded-lg"
          onChange={(e) => setProduct(e.target.value)}
        />
        <button
          className="my-2 btn btn-primary"
          onClick={() => {
            addToCart(product);
            ref.current.value = "";
            setProduct("");
          }}
        >
          add Item to Cart
        </button>
      </div>
        {hasHydrated &&
          cart.map((item) => (
            <div className="flex items-center justify-center text-center" key={item.id}>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <button
                className="mx-2 mt-2 btn btn-secondary btn-sm"
                onClick={() => removeItemFromCart(item.id)}
              >
                remove Item
              </button>
            </div>
          ))}
    </div>
  )
}
