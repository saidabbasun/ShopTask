import React from 'react'
import homeBg from '../assets/images/homeBg.webp'
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
         <div className="card bg-info text-white border-0  ">
  <img className="card-img card-img " src={homeBg} alt="Card image"
  height='700px'/>
  <div className="card-img-overlay d-flex flex-column  justify-content-center">
    <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p className="card-text lead fs-2"> CHECK OUT ALL THE TRENDS</p>


    </div>
  </div> 
</div>
<Products/>
    </div>
  )
}

export default Home