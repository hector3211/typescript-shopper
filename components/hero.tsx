import React from "react"
import useThemeStore from "../store/theme"
import {useStore} from "../store/store"
import productList from "../utils/productList"
const Hero = () => {
  const featuredProduct = productList[2]
  const {addToCart} = useStore()
  const themeState = useThemeStore((state) => state.theme)
  return(
    <div className={`${(themeState ? "text-white":"text-black")}`}>
      <section className="text-gray-400 body-font">
  <div className="container flex flex-col-reverse items-center px-5 mx-auto pt-36 md:flex-row">
    <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
      <h1 className="mt-5 mb-4 text-3xl font-medium text-gray-500 md:text-5xl title-font sm:text-4xl">Featured product
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 text-2xl leading-relaxed ">{featuredProduct.description}</p>
      <div className="flex justify-center">
        <button onClick={()=> addToCart(featuredProduct.name,featuredProduct.image,featuredProduct.price)} className="mx-2 btn btn-primary">Add to cart</button>
      </div>
    </div>
    <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
      <img src={featuredProduct.image} className="object-cover max-w-full border-2 border-solid rounded-lg border-primary"  alt="hero"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero;
