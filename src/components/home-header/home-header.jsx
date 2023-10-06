import React from 'react';
import './home-header.css';
import HeaderImage1 from '../../images/HeaderImage.webp';
import HeaderImage2 from '../../images/HeaderImage2.webp';

const HomeHeader = () => {
  return (
    <div className='body-container'>
      <div className='home-header-container'>

        {/* Content Container */}
        <div className='content-container'>
          <div className='header-container'>
            <h1 className='header-logo'>
              tacos
              tequila
              whiskey
            </h1>
            <h5 className='header-button'>
              Food
            </h5>
            <h5 className='header-button'>
              Brunch
            </h5>
          </div>
          <div className='images-container'>
            <div className='images-flex-container'>
              <div className='image-container'>
                <div className='image' style={{ backgroundImage: `url(${HeaderImage1})` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;

