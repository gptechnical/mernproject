import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/css/VideoCarousel.css'; 
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

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
        swipeable={true}
      >
        {/* Slide 1 */}
        <div className="carousel-slide">
          <video className="slide-video" autoPlay muted loop>
            <source src="/lap.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
          <div className="slide-content">
            <h2>Welcome to codegptech</h2>
            <p>High-Quality IT Services <TypeAnimation
              sequence={[ 
                'Web Designing',
                1000,
                'Frontend Development',
                1000,
                'Backend Development',
                1000,
                'Digital Marketing',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block', 
                color: "#ffc700", fontWeight: "700", 
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", 
                marginTop: "5px" }}
              repeat={Infinity}
           /></p>
            <Link to="/contact"><button>Contact Now</button></Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-slide">
          <video className="slide-video" autoPlay muted loop>
            <source src="/lap1.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
          <div className="slide-content">
            <h2>Welcome to codegptech</h2>
            <p>High-Quality IT Services <TypeAnimation
              sequence={[ 
                'Web Designing',
                1000,
                'Frontend Development',
                1000,
                'Backend Development',
                1000,
                'Digital Marketing',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block', 
                color: "#ffc700", fontWeight: "700", 
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", 
                marginTop: "5px" }}
              repeat={Infinity}
           /></p>
            <Link to="/contact"><button>Contact Now</button></Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
