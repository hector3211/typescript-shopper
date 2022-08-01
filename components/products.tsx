import React from "react"
import { useRouter } from "next/router"
import ProductList from "../utils/productList";
import {useStore} from "../store/store"
const Products = () => {
  const {addToCart} = useStore()
  const router = useRouter()
  return(
    <section className="text-gray-400 body-font">
  <div className="container px-5 mx-auto py-36">
    <div className="flex flex-wrap -m-4">
      {ProductList.map((product) => (
        <div key={product.id} className="w-full p-4 lg:w-2/6 md:w-1/2">
          <a className="relative block overflow-hidden rounded h-96 md:h-80">
            <button className="w-full h-full" onClick={() => router.push(`/products/${product.id}/${product.name}/${product.image}`)}>
          <img alt="ecommerce" className="block object-cover w-full h-full" src={product.image}/>
            </button>
        </a>
          <div className="flex flex-col mt-4 text-center justift-center md:text-left">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">{product.name}</h3>
          <p className="my-1">{`$ ${product.price}`}</p>
          <button onClick={() => addToCart(product.name,product.image,product.price)} className="btn btn-sm btn-accent">add to cart</button>
        </div>
      </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Products;  
