import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
const Cart = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-">
            <img src={Product.image} alt={product.title}  height='200px' widrh='1/>
        </div>
        </div>    
    </div>
  )
}

export default Cart