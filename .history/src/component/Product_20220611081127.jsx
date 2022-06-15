import React from 'react'
import { useState } from 'react';
import { useParams} from 'react-router'
const Product = () => {

    const {id}= useParams();
    const [product, setProduct]= useState([])
  return (
    <div>

    </div>
  )
}

export default Product