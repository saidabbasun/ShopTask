import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {id}= useParams();
    const [product, setProduct]= useState([]);
    const [loading, setLoading]= useState(false);

    const dispatch= useDispatch();
    const addProduct=(product)=>{
        dispatch(addCart(product))
    }
      
    
    useEffect(()=>{
        const getProduct=async ()=>{
            setLoading(true);
            const response=await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false)
        }

        getProduct()
    },[ ])
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

<button className="btn btn-outline-dark me-4" onClick={()=> handleButton(product)}>
  <i className="fa fa-minus"></i>
</button>
<button className="btn btn-outline-dark " onClick={()=> handleButton(product)}>
  <i className="fa fa-plus"></i>
</button>
        </div>    
    </div>
    </div>
    
  )
}

export default Cart