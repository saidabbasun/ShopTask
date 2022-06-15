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
      {state.map(state)=>(

      )}
    
    </div>
    
  )
}

export default Cart