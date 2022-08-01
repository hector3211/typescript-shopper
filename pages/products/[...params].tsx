import React from "react";
import { useRouter } from "next/router";
import ProductList from "../../utils/productList";
import Nav from "../../components/nav";
export default function SelectedProduct(){
  const router = useRouter();
  const {params = []} = router.query;
  if(params){
    const productId = params[0];
    const product = ProductList.find((product)=> product.id.toString() === productId);
    console.log(params)
  return(
    <div>
      <Nav/>
        <h1 className="pt-16 text-5xl text-center">Product Page</h1>
      <div className="flex flex-col items-center justify-center min-h-screen pt-20">
        <p className="text-2xl">{product?.name}</p>
        <img src={`${product?.image}`} alt={`photo of ${product?.name}`} className="w-1/4 rounded-lg h-1/4"/>
        <p className="w-1/4 text-xl text-center">{`Description: ${product?.description}`}</p>
      </div>
    </div>
  )
  }else{
    return(
      <div>
        <Nav/>
        <div className="pt-20">
        <h1>Product Page</h1>
        <p>No product selected</p>
        </div>
      </div>
    )
  }  
} 
