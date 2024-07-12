import React from 'react'
import './Luxury.css'
import { Link } from 'react-scroll'
import luxury1 from '../Assets/luxury1.jpeg'
import luxury2 from '../Assets/luxury2.jpeg'
import luxury3 from '../Assets/luxury3.jpeg'
import luxury4 from '../Assets/luxury4.jpeg'
import luxury5 from '../Assets/luxury5.jpeg'
import luxury6 from '../Assets/luxury6.jpeg'
const Luxury = () => {
  return (
  <section id='luxury'>
   <div className="luxury">
    <h2>Luxury Cars</h2>
    <p className="description"> High-end sedans that offer premium features, superior comfort, advanced technology, and refined performance. They are known for their stylish design, high-quality materials, and smooth driving experience.</p>
   </div>
   <div className="luxury-images">
    <img src={luxury1} alt="lux" />
    <img src={luxury2} alt="lux" />
    <img src={luxury3} alt="lux" />
    <img src={luxury4} alt="lux" />
    <img src={luxury5} alt="lux" />
    <img src={luxury6} alt="lux" />
   </div>
  </section>
  )
}

export default Luxury
