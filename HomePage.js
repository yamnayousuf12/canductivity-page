import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css'; 

const HomePage = () => {

return (
<div>
  <header className="site-header">
        <img
          src="image/log.png"
          alt="Logo"
          className="mx-auto mt-2"
        />
        <Carousel 
  autoPlay 
  interval={1000} 
  infiniteLoop 
  showThumbs={true} 
  showStatus={false} 
  showArrows={false}
  
>
  <div className="slide"><img src="image/c4.jpeg" alt="4"  /></div>
  <div className="slide"><img src="image/c5.jpeg" alt="5"  /></div>
  <div className="slide"><img src="image/c6.jpeg" alt="6"  /></div>
  <div className="slide"><img src="image/c8.jpeg" alt="8"  /></div>
  <div className="slide"><img src="image/c9.jpeg" alt="9"  /></div>
  <div className="slide"><img src="image/c10.jpeg" alt="10" /></div>
  <div className="slide"><img src="image/c1.jpeg" alt="1"  /></div>
  <div className="slide"><img src="image/c12.jpeg" alt="12" /></div>
  <div className="slide"><img src="image/c13.jpeg" alt="13" /></div>
  <div className="slide"><img src="image/c2.jpeg" alt="2" /></div>
  <div className="slide"><img src="image/c3.jpeg" alt="3" /></div>
  <div className="slide"><img src="image/c16.jpeg" alt="16" /></div>
  
  <div className="slide"><img src="image/c18.jpeg" alt="18" /></div>
</Carousel>      

        
   </header>
</div>
  );
};

export default HomePage;