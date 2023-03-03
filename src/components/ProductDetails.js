import React from 'react'
import { useDispatch } from 'react-redux'
import { add,remove } from '../store/CartSlice'

import '../styles/ProductDetails.css'

const ProductDetails = ({data,cart}) => {

  const dispatch=useDispatch()

  const handleClick=(data)=>{
  if(cart){
    console.log("remove")
    dispatch(remove(data.id))
  }
  else{
    dispatch(add(data))
    console.log("add")
  }
  }
  return (
    <div className='card'>
      <img src={data.image} alt="Avatar" />
      <h4>{data.title}</h4>
      <div>{data.price}$</div>
      <button  onClick={()=>handleClick(data)}>{cart?"Remove Product":"Add to Cart"}</button>
    </div>
  )
}

export default ProductDetails