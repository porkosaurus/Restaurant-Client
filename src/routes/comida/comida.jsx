import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import './comida.css';

function Comida() {
  const [selectedCategory, setSelectedCategory] = useState('comida');
  const [menuColor, setMenuColor] = useState('#FFF0C9'); // Initial background color

  const handleCategoryClick = (category, bgColor) => {
    setSelectedCategory(category);
    setMenuColor(bgColor);
  };
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case 'comida':
        return (
            <>
        {/* Street Tacos */}
        <div className="menu-category">
          <h2 className='menu-category-heading'>Street Tacos</h2>
          <div className='menu-items'>

            {/* Pinche Pollo */}
            <div className='menu-item'>
              <p className='menu-item-name'>Pinche Pollo</p>
              <p className='menu-item-price'>$5.00</p>
              <p className='menu-item-ingredients'>SINALOA STYLE GRILLED CHICKEN, CITRUS SERRANO SLAW, MORITA CREMA, CONFIT ONIONS</p>
            </div>

            {/* Veggie Tinga */}
            <div className='menu-item'>
              <p className='menu-item-name'>Veggie Tinga</p>
              <p className='menu-item-price'>$4.25</p>
              <p className='menu-item-ingredients'>ROASTED BRUSSELS SPROUTS, CORN, CAULIFLOWER, GUACAMOLE, BLACK BEANS, RADISH, TINGA SALSA.</p>
            </div>

            {/* Spicy Tuna */}
            <div className='menu-item'>
              <p className='menu-item-name'>Spicy Tuna</p>
              <p className='menu-item-price'>$6.00</p>
              <p className='menu-item-ingredients'>GUAJILLO CRUSTED AHI TUNA, SRIRACHA-SOY, GUACAMOLE, CHIPOTLE MAYO, BLACK SESAME SEEDS, CUCUMBER & RADISH, MIRIN</p>
            </div>

            {/* Carnitas */}
            <div className='menu-item'>
              <p className='menu-item-name'>Carnitas</p>
              <p className='menu-item-price'>$5.25</p>
              <p className='menu-item-ingredients'>CRISPY ROASTED PORK, PICKLED RED ONIONS, AVOCADO CREMA</p>
            </div>

            {/* Pollo Agave */}
            <div className='menu-item'>
              <p className='menu-item-name'>Pollo Agave</p>
              <p className='menu-item-price'>$4.75</p>
              <p className='menu-item-ingredients'>AGAVE-DIPPED FRIED CHICKEN, SLAW, MEXICAN CHIMICHURRI</p>
            </div>

            {/* Quesobirria */}
            <div className='menu-item'>
              <p className='menu-item-name'>Quesobirria</p>
              <p className='menu-item-price'>$5.50</p>
              <p className='menu-item-ingredients'>MELTED MONTEREY JACK CHEESE, ONION & CILANTRO, BIRRIA, CONSOMME, TOMATILLO AVOCADO SALSA</p>
            </div>

          </div>
        </div>

        {/* Antojitos */}
        <div className="menu-category">
          <h2 className='menu-category-heading'>Antojitos (Little Desires)</h2>
            <div className='menu-items'>

          {/* Pozole (Seasonal) */}
          <div className='menu-item'>
            <p className='menu-item-name'>Pozole (Seasonal)</p>
            <p className='menu-item-price'>$8.00</p>
            <p className='menu-item-ingredients'>CUP OF POZOLE, AVOCADO, QUESO FRESCO, CABBAGE, RADISH. ASK SERVER FOR SEASONAL SELECTION</p>
          </div>

          {/* Queso Fundido Al Tequila */}
          <div className='menu-item'>
            <p className='menu-item-name'>Queso Fundido Al Tequila</p>
            <p className='menu-item-price'>$11.00</p>
            <p className='menu-item-ingredients'>MELTED MONTEREY JACK CHEESE, TOMATO, ONION, CILANTRO, TEQUILA, W/ JUST MADE CHIPS</p>
          </div>

          {/* Queso Fundido Con Chorizo */}
          <div className='menu-item'>
            <p className='menu-item-name'>Queso Fundido Con Chorizo</p>
            <p className='menu-item-price'>$12.00</p>
            <p className='menu-item-ingredients'>MELTED PEPPER JACK CHEESE, CILANTRO, & CHORIZO, W/JUST MADE CHIPS</p>
          </div>

          {/* Queso Gringo */}
          <div className='menu-item'>
            <p className='menu-item-name'>Queso Gringo</p>
            <p className='menu-item-price'>$7.00</p>
            <p className='menu-item-ingredients'>MELTED AMERICAN CHEESE, CHARRED SERRANOS, JALAPEÑOS, PICO DE GALLO, SERVED W/JUST MADE CHIPS</p>
          </div>

          {/* Chicharrones */}
          <div className='menu-item'>
            <p className='menu-item-name'>Chicharrones</p>
            <p className='menu-item-price'>$6.00</p>
            <p className='menu-item-ingredients'>FRIED CHICKEN SKINS, SALSA CASERA</p>
          </div>

          {/* Guacamole & Chips */}
          <div className='menu-item'>
            <p className='menu-item-name'>Guacamole & Chips</p>
            <p className='menu-item-price'>$9.00</p>
            <p className='menu-item-ingredients'>SMASHED AVOCADOS, CHILE SERRANO, TOMATO, ONION, CILANTRO, SERVED W/JUST MADE CHIPS</p>
          </div>
            </div>

        </div>

    </>
        );
        case 'brunch':
            return (
              <>
                {/* Weekend Brunch */}
                <div className="menu-category">
                  <h2 className='menu-category-heading'>Weekend Brunch</h2>
                  <div className='menu-items'>
                    {/* Pinche Hash */}
                    <div className='menu-item'>
                      <p className='menu-item-name'>Pinche Hash</p>
                      <p className='menu-item-price'>$6.00</p>
                      <p className='menu-item-ingredients'>CARNITAS, SMASHED POTATOES & CARAMELIZED ONION HASH, SCRAMBLED EGGS, ROASTED GREEN-CHILE HOLLANDAISE</p>
                    </div>
          
                    {/* Huevos al Albañil */}
                    <div className='menu-item'>
                      <p className='menu-item-name'>Huevos al Albañil</p>
                      <p className='menu-item-price'>$4.25</p>
                      <p className='menu-item-ingredients'>SCRAMBLED EGGS, TOMATILLO SALSA, GRIDDLED COTIJA CHEESE</p>
                    </div>
          
                    {/* Chicken & the Egg */}
                    <div className='menu-item'>
                      <p className='menu-item-name'>Chicken & the Egg</p>
                      <p className='menu-item-price'>$5.75</p>
                      <p className='menu-item-ingredients'>AGAVE DIPPED FRIED CHICKEN, SWEET POTATO & ROASTED POBLANO HASH, MEXICAN CHIMICHURRI, SUNNY-SIDE-UP EGG</p>
                    </div>
          
                    {/* Queso Relleno */}
                    <div className='menu-item'>
                      <p className='menu-item-name'>Queso Relleno</p>
                      <p className='menu-item-price'>$6.00</p>
                      <p className='menu-item-ingredients'>GRIDDLED JACK CHEESE, ROASTED POBLANO, MUSHROOMS, AVOCADO, PICO DE GALLO, SUNNY-SIDE-UP EGG</p>
                    </div>
          
                    {/* Steak Ranchero */}
                    <div className='menu-item'>
                      <p className='menu-item-name'>Steak Ranchero</p>
                      <p className='menu-item-price'>$6.50</p>
                      <p className='menu-item-ingredients'>MARINATED GRILLED STEAK, SCRAMBLED EGGS, SALSA RANCHERO</p>
                    </div>
                  </div>
                </div>
              </>
            );
          
            case 'happy hour':
                return (
                  <>
                    {/* Margaritas */}
                    <div className="menu-category menu-category-happy-hour">
                      <h2 className='menu-category-heading'>Margaritas</h2>
                      <div className='menu-items'>
              
                        {/* Casa Coin */}
                        <div className='menu-item'>
                          <p className='menu-item-name'>Casa Coin</p>
                          <p className='menu-item-price'>$7.00</p>
                          <p className='menu-item-ingredients'>EXOTICO TEQUILA, ORANGE LIQUEUR, FRESH LIME, BROWN SUGAR SIMPLE SYRUP, SODA PRESS</p>
                        </div>
              
                        {/* Fresh Serrano Marg */}
                        <div className='menu-item'>
                          <p className='menu-item-name'>Fresh Serrano Marg</p>
                          <p className='menu-item-price'>$7.00</p>
                          <p className='menu-item-ingredients'>EXOTICO TEQUILA, ORANGE LIQUEUR, FRESH LIME, BROWN SUGAR SIMPLE SYRUP, SODA PRESS, FRESH SERRANO AND A SPICY RIM</p>
                        </div>
              
                        {/* The Purist */}
                        <div className='menu-item'>
                          <p className='menu-item-name'>The Purist</p>
                          <p className='menu-item-price'>$9.00</p>
                          <p className='menu-item-ingredients'>CORRALEJO BLANCO, AGAVE NECTAR, FRESH LIME</p>
                        </div>
              
                        {/* Cadillac */}
                        <div className='menu-item'>
                          <p className='menu-item-name'>Cadillac</p>
                          <p className='menu-item-price'>$14.00</p>
                          <p className='menu-item-ingredients'>MAESTRO DOBEL PINCHE BARREL SELECT TEQUILA, GRAND MARNIER, FRESH LIME, AGAVE</p>
                        </div>
              
                        {/* Pinche Signature Marg */}
                        <div className='menu-item'>
                          <p className='menu-item-name'>Pinche Signature Marg</p>
                          <p className='menu-item-price'>$12.00</p>
                          <p className='menu-item-ingredients'>EL MAYOR TEQUILA, FAMILY JONES ORANGE LIQUEUR, FRESH LIME</p>
                        </div>
              
                        {/* Hibiscus Margarita */}
                        <div className='menu-item'>
                          <p className='menu-item-name'>Hibiscus Margarita</p>
                          <p className='menu-item-price'>$12.00</p>
                          <p className='menu-item-ingredients'>SUERTE BLANCO, LIME, HIBISCUS SIMPLE SYRUP</p>
                        </div>
              
                      </div>
                    </div>
              
                   
                    {/* Beer & Shot */}
                    <div className="menu-category menu-category-happy-hour">
                      <h2 className='menu-category-heading'>Beer & Shot</h2>
                      <div className='menu-items'>
              
                        {/* Sesión Mexican Lager + Suerte Blanco */}
                        <div className='menu-item'>
                          <p className='menu-item-name'>Sesión Mexican Lager + Suerte Blanco</p>
                          <p className='menu-item-price'>$8.00</p>
                          <p className='menu-item-ingredients'></p>
                        </div>
              
                        {/* Sesión Mexican Lager + 4 Roses */}
                        <div className='menu-item'>
                          <p className='menu-item-name'>Sesión Mexican Lager + 4 Roses</p>
                          <p className='menu-item-price'>$8.00</p>
                          <p className='menu-item-ingredients'></p>
                        </div>
              
                      </div>
                    </div>
                  </>
                );
              
                case 'drinks':
                    return (
                      <>
                        {/* Margaritas */}
                        <div className="menu-category">
                          <h2 className='menu-category-heading'>Margaritas</h2>
                          <div className='menu-items'>
                  
                            {/* Pinche Signature Marg */}
                            <div className='menu-item'>
                              <p className='menu-item-name'>Pinche Signature Marg</p>
                              <p className='menu-item-price'>$14.00</p>
                              <p className='menu-item-ingredients'>EL MAYOR TEQUILA, FAMILY JONES ORANGE LIQUEUR, FRESH LIME</p>
                            </div>
                  
                            {/* The Purist */}
                            <div className='menu-item'>
                              <p className='menu-item-name'>The Purist</p>
                              <p className='menu-item-price'>$11.00</p>
                              <p className='menu-item-ingredients'>CORRALEJO BLANCO, AGAVE NECTAR, FRESH LIME</p>
                            </div>
                  
                            {/* Cadillac */}
                            <div className='menu-item'>
                              <p className='menu-item-name'>Cadillac</p>
                              <p className='menu-item-price'>$16.00</p>
                              <p className='menu-item-ingredients'>MAESTRO DOBEL PINCHE BARREL SELECT TEQUILA, GRAND MARNIER, FRESH LIME, AGAVE</p>
                            </div>
                  
                            {/* Fresh Serrano Marg */}
                            <div className='menu-item'>
                              <p className='menu-item-name'>Fresh Serrano Marg</p>
                              <p className='menu-item-price'>$9.00</p>
                              <p className='menu-item-ingredients'>EXOTICO TEQUILA, ORANGE LIQUEUR, FRESH LIME, BROWN SUGAR SIMPLE SYRUP, SODA PRESS, FRESH SERRANO AND A SPICY RIM</p>
                            </div>
                  
                            {/* Casa Coin Marg */}
                            <div className='menu-item'>
                              <p className='menu-item-name'>Casa Coin Marg</p>
                              <p className='menu-item-price'>$9.00</p>
                              <p className='menu-item-ingredients'>EXOTICO TEQUILA, ORANGE LIQUEUR, FRESH LIME, BROWN SUGAR SIMPLE SYRUP, SODA PRESS</p>
                            </div>
                  
                            {/* Hibiscus Margarita */}
                            <div className='menu-item'>
                              <p className='menu-item-name'>Hibiscus Margarita</p>
                              <p className='menu-item-price'>$14.00</p>
                              <p className='menu-item-ingredients'>SUERTE BLANCO, LIME, HIBISCUS SIMPLE SYRUP</p>
                            </div>
                  
                          </div>
                        </div>
                  
                        {/* Featured Cocktail */}
                        <div className="menu-category">
                          <h2 className='menu-category-heading'>Featured Cocktail</h2>
                          <div className='menu-items'>
                  
                            {/* Seasonal Hand Crafted Cocktail */}
                            <div className='menu-item'>
                              <p className='menu-item-name'>Seasonal Hand Crafted Cocktail</p>
                              <p className='menu-item-price'>MP</p>
                              <p className='menu-item-ingredients'>ROTATING FLAVORS. PLEASE ASK FOR SELECTIONS</p>
                            </div>
                  
                          </div>
                        </div>
                      </>
                    );
                  
      default:
        return null;
    }
  };

  return (
    <div className="menu-flex-container" style={{ backgroundColor: menuColor }}>
      <Navbar />
      <div className='menu-food-container' style={{ backgroundColor: menuColor}}>
        <div className='categories-container'>
          <h3
            className={`category ${selectedCategory === 'comida' ? 'food-category' : ''}`}
            onClick={() => handleCategoryClick('comida', '#F04E36')}
          >
            comida
          </h3>
          <h3
            className={`category ${selectedCategory === 'brunch' ? 'brunch-category' : ''}`}
            onClick={() => handleCategoryClick('brunch', '#FBAD18')}
          >
            brunch
          </h3>
          <h3
            className={`category ${selectedCategory === 'happy hour' ? 'happy-hour-category' : ''}`}
            onClick={() => handleCategoryClick('happy hour', '#FFE9A6')}
          >
            happy hour
          </h3>
          <h3
            className={`category ${selectedCategory === 'drinks' ? 'drinks-category' : ''}`}
            onClick={() => handleCategoryClick('drinks', '#74C2C5')}
          >
            bebidas
          </h3>
        </div>
        
        {renderCategoryContent()}
      </div>
    </div>
  );
}

export default Comida;