import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"


const Navbar = () => {
  const item=useSelector(item=>item.cart)
  return (
    <div className='nav-container'>
       <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
        <div>
        <Link to="/" className='nav-logo'></Link>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/cart" className="nav-item">Cart</Link>
        </div>
        <div>
          <span style={{color:"white",paddingRight:"10px"}}>Cart Item:  {item.length}</span>
        </div>
       </div>

    </div>
  )
}

export default Navbar