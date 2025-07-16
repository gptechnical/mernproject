import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/css/VideoCarousel.css';

const VideoCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        stopOnHover={false}
      >
        {/* Slide 1 */}
        <div className="carousel-slide" style={{ backgroundImage: `url('/image1.jpg')` }}>
          <div className="image-overlay" />
          <div className="slide-content">
            <h2>Stunning Designs</h2>
            <p>Make your web presence stand out.</p>
            <button>Learn More</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide" style={{ backgroundImage: `url('/image2.jpg')` }}>
          <div className="image-overlay" />
          <div className="slide-content">
            <h2>Clean & Modern</h2>
            <p>Responsive layouts for every device.</p>
            <button>Explore Now</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
