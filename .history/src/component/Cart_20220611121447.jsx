import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4">
            <img src={product.image} alt={product.title}  height='200px' widrh='180px'/>
        </div>
        <div className='col-md-4'>
<h3 className='text-uppercase text-black-50'>
    {product.t}
</h3>

<h1 className='display-5'>{product.title}</h1>
<p className="lead fw-bolder">
    Rating {product.rating && product.rating.rate}
    <i className="fa fa-star">  </i>
</p>
<h3 className="display-6 fw-bold my-4">
    ${product.price}
</h3>
<p className="lead">{product.description}</p>
<button className="btn btn-outline-dark px-4 py-2" onClick={()=> addProduct(product)}>
    Add to Cart
</button>
        </div>    
    </div>
  )
}

export default Cart