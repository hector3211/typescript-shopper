import React,{useState,useEffect} from "react"
import Nav from "../../components/nav"
import ShoppingCart from "../../components/shoppingCart"
export default function Cart(){
  return (
    <div>
      <Nav/>
      <div className="pt-20">
        <ShoppingCart/>
      </div>
    </div>
  )
}
