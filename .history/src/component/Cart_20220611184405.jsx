import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

const Cart = () => {

    const {id}= useParams();
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
    const ShowProduct=()=>{
        return(
            <>
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

{/* <button className="btn btn-outline-dark me-4" onClick={()=> handleButton(product)}>
  <i className="fa fa-minus"></i>
</button> */}
{/* <button className="btn btn-outline-dark " onClick={()=> handleButton(product)}>
  <i className="fa fa-plus"></i>
</button> */}
        </div> 
        </> 
        )
    }
  return (
    <div className='container'>
      <div className="row">
        {loading ? <Loading/>:<ShowProduct/>}   
    </div>
    </div>
    
  )
}

export default Cart