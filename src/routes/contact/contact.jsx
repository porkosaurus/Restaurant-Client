import React from 'react'
import './contact.css'
import Navbar from '../../components/navbar/navbar'

const Contact = () => {
  return (
    <div className='contact-page-container'>
        <Navbar></Navbar>
        <div className='top-contact-container'>
            <h2 className='top-contact-heading'>let's taco bout it</h2>
        </div>
        <div className='bottom-contact-container'>
            <div className='red-contact-container'>
                <div className='bottom-contact-text'>
                <h3 className='bottom-contact-heading'>highlands</h3>
                <h5 className='bottom-contact-address'>3300 W 32 AVE</h5>
                <h5 className='bottom-contact-number'>720-502-4608</h5>
                <button className='hours-button red-hours-button'>HOURS & MORE</button>
                </div>
            </div>
            <div className='black-contact-container'>
                <div className='bottom-contact-text'>
                <h3 className='bottom-contact-heading'>city park(og)</h3>
                <h5 className='bottom-contact-address'>1514 YORK ST</h5>
                <h5 className='bottom-contact-number'>720-475-1337</h5>
                <button className='hours-button black-hours-button'>HOURS & MORE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact