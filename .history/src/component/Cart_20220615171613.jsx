import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux'

const Cart = () => {


    const state=useSelector((state)=> state.cart)
  
    const Loading=()=>{
        return(
            <>
           <div className="col-md-6">
            <Skeleton height={400}/>
           </div>
           <div className="col-md-6" style={{lineHeight:2}}>
            <Skeleton height={50} width={300}/>
            <Skeleton height={75}/>
            <Skeleton height={25} width={200}/>
            <Skeleton height={50}  width={150}/>
            <Skeleton height={150}/>
            <div className="d-flex">
            <Skeleton height={50} width={120}/>
            <Skeleton height={50} width={120} style={{marginLeft:6}}/>

            </div>
           </div>

            </>
        )
    }
 
  
  return (
    <div className='container'>
      {state.map(state)}
      <div className="row">
      <div className="col-md-4">
            <img src={state.image} alt={state.title}  height='200px' widrh='180px'/>
        </div>
        <div className='col-md-4'>
<h3>{state.title}
</h3>


<p className="lead fw-bolder">
  {state.qty} X ${state.price}=$
  {state.qty * state.price}
    
</p>
{/* <button className="btn btn-outline-dark me-4" onClick={()=> handleCart(state)}>
  <i className="fa fa-minus"></i>
</button> 
<button className="btn btn-outline-dark " onClick={()=> handleCart(state)}>
  <i className="fa fa-plus"></i>
</button> */}
        </div> 
    </div>
    </div>
    
  )
}

export default Cart