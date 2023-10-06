import React from 'react'
import './bottom-curve.css'
import BottomCurveImage from '../../images/BottomCurveContainer.webp'
import SmallImageContainer from '../../images/SmallImage.webp'
import BigImageContainer from '../../images/BigImageContainer.webp'

const BottomCurve = () => {
  return (
    <div className='bottom-curve-container'>
    <div className='curve-bg-overlay'>
      <div className='bottom-curve-flex'>
        <div className='bottom-curve-image-container'>
        <div className='small-image-container' style={{backgroundImage: `url(${SmallImageContainer})`}}>

        </div>
        <div className='big-image-container' style={{backgroundImage: `url(${BigImageContainer})`}}>

        </div>
        </div>
        <div className='bottom-curve-text-container'>
          <p className='paragraph'>Kevin Morrison's unconventional path to success began with selling popcorn at home and led him to become a chef and founder of an award-winning taco joint chain, all while maintaining his philosophy of hiring smart people who share his work ethic and never settling for the traditional route. In short, Kevin's journey is a true story of a badass who knows how to create and lead with style.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BottomCurve