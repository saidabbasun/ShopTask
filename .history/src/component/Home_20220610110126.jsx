import React from 'react'
import homeBg from '../assets/images/homeBg.png'

const Home = () => {
  return (
    <div className='hero'>
         <div class="card bg-dark text-white border-0">
  <img class="card-img" src={homeBg} alt="Card image"
  height='550px'/>
  <div class="card-img-overlay">
    <div className="container">
    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p class="card-text"> is a widerThis card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>


    </div>
  </div>
</div>
    </div>
  )
}

export default Home