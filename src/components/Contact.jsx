import React from 'react'
import './Contact.css'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className="col-1">
                    <div className="content">
                        <div>
                            <h2>Get in touch</h2>
                            <p>Lorem ipsum dolor sit, a numquam totam ratione quae quasi dignissimos reprehenderit at deleniti dolores, voluptas ex.</p>
                        </div>
                        <div className="address">
                            <p>23 Texas</p>
                            <p>San Fransico ,USA</p>
                        </div>
                        <div className="icons">
                            <FaPhone style={{marginRight:'1rem'}}/>
                            <p>+1(435) 123-4567</p>
                        </div>
                        <div className="icons">
                            <FaEnvelope style={{marginRight:'1rem'}}/>
                            <p>support@gmail.com</p>
                        </div>
                        <div className="careers">
                            <p>Looking for careers? <span>View all job opening</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <form action="">
                        <input type="text" placeholder='full Name' />
                        <input type="email" placeholder='Email' />
                        <input type="number" placeholder='Phone' />
                        <textarea name="message" placeholder='Message' cols="30" rows="10"></textarea>
                        <div className="checkbox">
                            <input type="checkbox" />
                            <p>By checking this box, you agree to the <span>Privacy Policy</span> and <span>Cookie Policy</span></p>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact