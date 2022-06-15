import React,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';

const Products = () => {
    const [data, setData]=useState([])
    const [filter, setFilter]=useState(data)
    const [loading, setLoading]= useState(false);
    let componentMounted=true

    useEffect(()=>{
        const getProducts=async()=>{
setLoading(true);
const response=await fetch('https://fakestoreapi.com/products')
if(componentMounted){
    setData(await response.clone().json());
    setFilter(await response.json());
    setLoading(false);
    console.log(filter)
}
     else{
       
            componentMounted=false;
        
    }
    }
        getProducts()
    },[])
    const Loading=()=>{
        return(
            <>
           <div className="col-md-3">
            <Skeleton height={350}/>
           </div>
           <div className="col-md-3">
            <Skeleton height={350}/>
           </div>
           <div className="col-md-3">
            <Skeleton height={350}/>
           </div>
           <div className="col-md-3">
            <Skeleton height={350}/>
           </div>
            </>
        )
    }
    const ShowProducts=()=>{
        return(
            <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark" onClick={=}>All</button>
            <button className="btn btn-outline-dark me-2">Men's Clothing</button>
            <button className="btn btn-outline-dark me-2">Women's Clothing</button>
            <button className="btn btn-outline-dark me-2">Jawelery </button>
            <button className="btn btn-outline-dark me-2">Electronic</button>
            {filter.map((product)=>{
                return(
                    <>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center p-4  " key={product.id} >
                        <img className="card-img-top" src={product.image} alt={product.title} height='250px'/>
  <div className="card-body">

    <h5 className="card-title mb-0 ">{product.title.substring(0,12)}... </h5>
    <p className="card-text lead fw-bold ">${product.price} </p>

 <a href="#" className='btn btn-warning '> Buy Now</a>
    </div>
  </div> 
                        </div>
                
                    </>
                )
            })}
        </div>
            </>
        )
    }
    
    return (
      
    <div>
<div className="container my-5 py-5">
    <div className="row">
        <div className="col-12">
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <hr />

        </div>
    </div>
    <div className="row justify-content-center">
{loading ? <Loading/> : <ShowProducts/>}
    </div>
</div>
    </div>
  )
}

export default Products