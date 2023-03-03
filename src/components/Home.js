import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div>
        <h2>Welcome to the Redux Toolkit Store</h2>
        <section>
            <h3>Products</h3>
            <Products/>
        </section>
    </div>
  )
}

export default Home