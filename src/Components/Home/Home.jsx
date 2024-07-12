import React from 'react'
import './Home.css'
import car1 from '../Assets/car1.jpeg'
import car2 from '../Assets/car2.jpeg'
import car3 from '../Assets/car3.jpeg'
import car4 from '../Assets/car4.jpeg'
import car5 from '../Assets/car5.jpeg'
import car6 from '../Assets/car7.jpeg'


const Home = () => {
  return (

    <section id='home'>
      <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Phoenix Motors</h1>
       
      </div>
      <div className="gallery">
        <img src={car1} alt="Car 1" />
        <img src={car2} alt="Car 2" />
        <img src={car3} alt="Car 3" />
        <img src={car4} alt="Car 1" />
        <img src={car5} alt="Car 2" />
        <img src={car6} alt="Car 3" />

      </div>
      </div>
      
    </section>
    
  )
}

export default Home
