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
<h3>{product.title}
</h3>


<p className="lead fw-bolder">
  {product.qty} X ${product.price}=$
  {product.qty * product.price}
    
</p>

<button className="btn btn-outline-dark me-4" onClick={()=> handle(product)}>
    Add to Cart
</button>
        </div>    
    </div>
  )
}

export default Cart