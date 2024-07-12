import React from 'react'
import { Link } from 'react-scroll'
import './Sedans.css'
import sedan1 from '../Assets/sedan1.jpeg'
import sedan2 from '../Assets/sedan2.jpeg'
import sedan3 from '../Assets/sedan3.jpeg'
import sedan4 from '../Assets/sedan4.jpeg'
import sedan5 from '../Assets/sedan5.jpeg'
import sedan6 from '../Assets/sedan6.jpeg'

const Sedans = () => {
  return (
   <section id='sedans'>
    <div className="sedans">
      <h2>Sedan Cars</h2>
        <p className="description">Sedans are one of the most popular types of passenger cars, known for their comfortable interiors, smooth ride quality, and practical design. They are characterized by a three-box configuration with separate compartments for the engine, passengers, and cargo.</p>
      <div className="sedans-images">
        <img src={sedan1} alt="sedan" />
        <img src={sedan2} alt="sedan" />
        <img src={sedan3} alt="sedan" />
        <img src={sedan4} alt="sedan" />
        <img src={sedan5} alt="sedan" />
        <img src={sedan6} alt="sedan" />
      </div>
    </div>
   </section>
  )
}

export default Sedans
