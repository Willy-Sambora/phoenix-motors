import React from 'react'
import './Trucks.css'
import { Link } from 'react-scroll'
import truck1 from '../Assets/truck1.jpeg'
import truck2 from '../Assets/truck2.jpeg'
import truck3 from '../Assets/truck3.jpeg'
import truck4 from '../Assets/truck4.jpeg'
import truck5 from '../Assets/truck5.jpeg'
import truck6 from '../Assets/truck6.jpeg'

const Trucks = () => {
  return (
  <section id='trucks'>
    <div className="trucks">
      <h2>Trucks</h2>
      <p className='description'>Trucks are powerful vehicles designed for heavy-duty tasks, offering exceptional towing and payload capacities. They are ideal for work, recreation, and off-road adventures, combining rugged durability with advanced technology and comfort.</p>
      <div className="trucks-images">
        <img src={truck1} alt="trucks" />
        <img src={truck2} alt="trucks" />
        <img src={truck3} alt="trucks" />
        <img src={truck4} alt="trucks" />
        <img src={truck5} alt="trucks" />
        <img src={truck6} alt="trucks" />
      </div>
    </div>
  </section>
  )
}

export default Trucks
