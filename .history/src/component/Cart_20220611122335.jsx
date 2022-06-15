import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  
    const [product, setProduct]= useState([]);
    const [loading, setLoading]= useState(false);

   
      
    
    useEffect(()=>{
        const getProduct=async ()=>{
            setLoading(true);
            const response=await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false)
        }

        getProduct()
    },[ ])

    const ShowProduct=()=
  return (
    <div className='container'>
      <div className="row">
        {loading ? <Loading/>:<ShowProduct/>}   
    </div>
    </div>
    
  )
}

export default Cart