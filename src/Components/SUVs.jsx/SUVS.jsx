import React from 'react'
import './SUVs.css'
import { Link } from 'react-scroll'
import suv1 from '../Assets/suv1.jpeg'
import suv2 from '../Assets/suv2.jpeg'
import suv3 from '../Assets/suv3.jpeg'
import suv4 from '../Assets/suv4.jpeg'
import suv5 from '../Assets/suv5.jpeg'
import suv6 from '../Assets/suv6.jpeg'

const SUVS = () => {
  return (
  <section id='suvs'>
    <div className="suvs">
      <h2>SUVs Cars</h2>
      <p className='description'>Sport Utility Vehicles (SUVs) are versatile vehicles designed to offer a combination of space, comfort, and off-road capability. They are well-suited for families, outdoor enthusiasts, and anyone who needs a vehicle with ample cargo space and robust performance.</p>
      <div className="suvs-images">
        <img src={suv1} alt="suvs" />
        <img src={suv2} alt="suvs" />
        <img src={suv3} alt="suvs" />
        <img src={suv4} alt="suvs" />
        <img src={suv5} alt="suvs" />
        <img src={suv6} alt="suvs" />
      </div>
    </div>
  </section>
  )
}

export default SUVS
