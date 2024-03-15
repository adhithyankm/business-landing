import React from 'react'
import './Testimonial.css'
import { FaDatabase } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className="container">
            <div className="outline">
                <div className="content">
                    <i><FaDatabase/>Staxx</i>
                    <p className="body">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, magnam quasi. Quasi dolorem vitae molestias accusamus assumenda! Velit necessitatibus, dolor esse dignissimos possimus voluptatibus alias, ab animi nemo qui dicta.z
                    </p>
                    <div className="name">
                        <p>James Clark</p>
                        <p>CEO ,staxx</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Testimonial