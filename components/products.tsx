import React from "react"
import ProductList from "../utils/productList";
import {useStore} from "../store/store"
const Products = () => {
  const {addToCart} = useStore()
  return(
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {ProductList.map((product) => (
        <div key={product.id} className="w-full p-4 lg:w-1/4 md:w-1/2">
        <a className="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" className="block object-cover object-center w-full h-full" src={product.image}/>
        </a>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">{product.name}</h3>
          <p className="mt-1">{product.price}</p>
          <button onClick={() => addToCart(product.name)} className="btn btn-sm btn-accent">add to cart</button>
        </div>
      </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Products;  
