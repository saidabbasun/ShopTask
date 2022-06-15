import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
const Cart = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-">
            <img src={Product.image} alt={Product.title} />
        </div>
        </div>    
    </div>
  )
}

export default Cart