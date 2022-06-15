import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams} from 'react-router'
const Product = () => {

    const {id}= useParams();
    const [product, setProduct]= useState([]);
    const [loading, setLoading]= useState(false);
    
    useEffect(()=>{
        const getProduct=async ()={
            
        }
    })
    
  return (
    <div>

    </div>
  )
}

export default Product