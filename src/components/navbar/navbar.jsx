import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showList, setShowList] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      const timeout = setTimeout(() => {
        setShowList(true);
      }, 1300);

      return () => clearTimeout(timeout);
    } else {
      setShowList(false);
    }
  }, [isExpanded]);
  return (
    <div className='navbar-container'>
      <button className='locations-button'>
        Locations
      </button>
      <button className='hamburger-button' onClick={toggleExpand}>
        <div className={`hamburger-container ${isExpanded ? 'expandedHamburger' : ''}`}>
          <div className='hamburger-line'></div>
          <div className='hamburger-line'></div>
          <div className='hamburger-line'></div>
        </div>
      </button>
      <div className={`expanded-background ${isExpanded ? 'expanded' : ''}`} />
      <div className={`navbar-list-container ${showList ? 'slide-down' : ''}`}>
        <ul className='navbar-list'>
          <li className='navbar-items'><a href="/">Home</a></li>
          <li className='navbar-items'><a href="/menu">Menu</a></li>
          <li className='navbar-items'><a href="/menu/food">Food</a></li>
          <li className='navbar-items'><a href="/menu/brunch">Brunch</a></li>
          <li className='navbar-items'><a href="/menu/beer">Beer</a></li>
          <li className='navbar-items'><a href="/menu/drinks">Drinks</a></li>
          <li className='navbar-items'><a href="/contact">Contact</a></li>
          <li className='navbar-items'><a href="/register"></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
