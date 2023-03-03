import React from 'react'
import { useSelector } from 'react-redux'
import ProductDetails from './ProductDetails'

const Cart = () => {
  const cartItem=useSelector(item=>item.cart)
  const productDetails=cartItem.map((value)=>{
    return <ProductDetails key={value.id} data={value} cart={true}/>
  })
  return (
    <div>
      <div style={{marginTop:"100px"}}>
      {productDetails}
      </div>
    </div>
  )
}

export default Cart