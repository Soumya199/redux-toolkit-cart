import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts,status as STATUSES } from '../store/ProductSlice'
import ProductDetails from './ProductDetails'


const Products = () => {
    const {data:products,status}=useSelector((product=>product.product))
    const dispatch=useDispatch()
    useEffect(()=>{
        console.log("effect")
        // const fetchProducts=()=>{                                         //directly calling inside hooks
        //     const products=fetch('https://fakestoreapi.com/products/')
        //     products.then((res)=>res.json())
        //     .then(res=>setProducts(res))
        // }
        if(products.length===0){
          dispatch(fetchProducts())                                         //using Redux Thunk middleware
        }
        
    },[])
    
    const productDetails=products.map((value)=>{
        return <ProductDetails key={value.id} data={value}/>
    })
    if(status===STATUSES.LOADING){
      return <h1>Loading....</h1>
    }
    if(status===STATUSES.ERROR){
      return <h1>Something went Wrong!!..</h1>
    }

  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
    {productDetails}
    </div>
    
  )
}

export default Products