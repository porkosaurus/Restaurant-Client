import React, { useState } from 'react';
import './menu.css';
import Navbar from '../../components/navbar/navbar';
import RedContainerImage from '../../images/RedContainer.webp';
import YellowContainerImage from '../../images/YellowContainer.webp';
import WhiteContainerImage from '../../images/WhiteContainer.webp';
import BlueContainerImage from '../../images/BlueContainer.webp';

const Menu = () => {
  const [isRedContainerHovered, setIsRedContainerHovered] = useState(false);
  const [isYellowContainerHovered, setIsYellowContainerHovered] = useState(false);
  const [isWhiteContainerHovered, setIsWhiteContainerHovered] = useState(false);
  const [isBlueContainerHovered, setIsBlueContainerHovered] = useState(false);

  return (
    <div className='menu-page-container'>
      <Navbar />
      <div className='menu-container'>
        <div className='menu-top-container'>
          <h1 className='menu-header'>menús</h1>
        </div>
        <div className='menu-bottom-container'>
          <div
            className={`menu-red-container food-container ${isRedContainerHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsRedContainerHovered(true)}
            onMouseLeave={() => setIsRedContainerHovered(false)}
            style={{
              background: `linear-gradient(to right, rgba(240, 78, 53, ${isRedContainerHovered ? '0.7' : '1'}), rgba(240, 78, 53, ${isRedContainerHovered ? '0.7' : '1'})), url(${RedContainerImage})`,
              backgroundSize: 'cover'
            }}
          >
            <div className='text-container'>
              <h2 className='red-heading heading'>comida</h2>
              <h4 className='red-sub-heading'>(food)</h4>
              <button className='red-button'>View Menu</button>
            </div>
          </div>
          <div
            className={`menu-yellow-container food-container ${isYellowContainerHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsYellowContainerHovered(true)}
            onMouseLeave={() => setIsYellowContainerHovered(false)}
            style={{
              background: `linear-gradient(to right, rgba(251, 173, 24, ${isYellowContainerHovered ? '0.7' : '1'}), rgba(251, 173, 24, ${isYellowContainerHovered ? '0.7' : '1'})), url(${YellowContainerImage})`,
              backgroundSize: 'cover'
            }}
          >
            <div className='text-container'>
              <h2 className='yellow-heading heading'>brunch</h2>
              <button className='yellow-button'>View Menu</button>
            </div>
          </div>
          <div
            className={`menu-white-container food-container ${isWhiteContainerHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsWhiteContainerHovered(true)}
            onMouseLeave={() => setIsWhiteContainerHovered(false)}
            style={{
              background: `linear-gradient(to right, rgba(255, 233, 166, ${isWhiteContainerHovered ? '0.7' : '1'}), rgba(255, 233, 166, ${isWhiteContainerHovered ? '0.7' : '1'})), url(${WhiteContainerImage})`,
              backgroundSize: 'cover'
            }}
          >
            <div className='text-container'>
              <h2 className='white-heading heading'>happy hour</h2>
              <button className='white-button'>View Menu</button>
            </div>
          </div>
          <div
            className={`menu-blue-container food-container ${isBlueContainerHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsBlueContainerHovered(true)}
            onMouseLeave={() => setIsBlueContainerHovered(false)}
            style={{
              background: `linear-gradient(to right, rgba(116, 194, 197, ${isBlueContainerHovered ? '0.7' : '1'}), rgba(116, 194, 197, ${isBlueContainerHovered ? '0.7' : '1'})), url(${BlueContainerImage})`,
              backgroundSize: 'cover'
            }}
          >
            <div className='text-container'>
              <h2 className='blue-heading heading'>bebidas</h2>
              <h4 className='blue-sub-heading'>(drinks)</h4>
              <button className='blue-button'>View Menu</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

