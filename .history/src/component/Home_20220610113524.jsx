import React from 'react'
import homeBg from '../assets/images/homeBg'

const Home = () => {
  return (
    <div className='hero'>
         <div class="card bg-info text-white border-0 d-flex justify-content-arround  ">
  <img class="card-img " src={homeBg} alt="Card image"
  height='750px' width='550px'/>
  <div class="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p class="card-text lead fs-2"> CHECK OUT ALL THE TRENDS</p>


    </div>
  </div>
</div>
    </div>
  )
}

export default Home