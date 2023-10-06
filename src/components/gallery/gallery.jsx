import React from 'react'
import './gallery.css'

const Gallery = () => {
  return (
    <div className='gallery-container'>
        <div className="masonryGalleryDesktop">
            <div className="itemBox box-0">
                <img src="https://www.tacostequilawhiskey.com/wp-content/uploads/2023/07/Screenshot-2023-07-24-at-2.57.42-PM.png" alt="Delicious Burrito" />
            </div>
            <div className="itemBox box-1">
                <img src="https://www.tacostequilawhiskey.com/wp-content/uploads/2023/02/gallery-img8.jpg" alt="Tacos On A Plate" />
            </div>
            <div className="itemBox box-2">
                <img src="https://www.tacostequilawhiskey.com/wp-content/uploads/2023/02/gallery-img3.jpg" alt="Egg On a Taco" />
            </div>
            <div className="itemBox box-3">
                <img src="https://www.tacostequilawhiskey.com/wp-content/uploads/2023/07/Taco-plate.png" alt="Beautiful Plate Of Tacos" />
            </div>
            <div className="itemBox box-4">
                <img src="https://www.tacostequilawhiskey.com/wp-content/uploads/2023/07/image0.jpeg" alt="Tacos Tequila Whiskey Team" />
            </div>
            <div className="itemBox box-5">
                <img src="https://www.tacostequilawhiskey.com/wp-content/uploads/2023/03/donkey-den-3-1.svg" alt="Tacos Tequila Whiskey food Truck" />
            </div>
            <div className="itemBox box-6">
                <img src="https://www.tacostequilawhiskey.com/wp-content/uploads/2023/07/Screenshot-2023-07-24-at-2.49.35-PM.png" alt="Taco's With Salsa and Lime" />
            </div>
            <div className="itemBox box-7">
                <img src="https://www.tacostequilawhiskey.com/wp-content/uploads/2023/07/Tacos-1.png" alt="Dinner Being Served" />
            </div>
        </div>
    </div>
  )
}

export default Gallery