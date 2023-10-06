import React from 'react'
import BottomCurveImage from '../../images/BottomCurveContainer.webp'

import './top-curve.css'

const TopCurve = () => {
  return (
    <div className='top-curve-container'>
        <div className='top-curve-container-flex'>
            <div className='top-curve-container-image'>
                <div className='top-curve-image' style={{backgroundImage: `url(${BottomCurveImage})`}}>

                </div>
            </div>
            <div className='top-curve-container-text'>
                <h2 className='not-shadow-text'>
                    a fresh take on 
                    <br />
                    comida de la calle
                </h2>
                <h3 className='street-food'>
                    (street food)
                </h3>
                <p className='top-curve-desc'>
                Award-winning tacos served alongside quality, small-batch tequila and whiskey as well as award-winning cocktails and desserts. We believe in using local products while staying true to authentic regional recipes—we specialize in making the absolute best street tacos anywhere.
                </p>
                <div className='about-button-container'>

                </div>
                <button className='about-button'>
                    <span>About Us</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default TopCurve