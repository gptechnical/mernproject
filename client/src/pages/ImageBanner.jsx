import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import "../assets/css/VideoCarousel.css";
import "../assets/css/Button.css";
import BgVideo from "../assets/images/ved.mp4";
import { FaArrowRight } from "react-icons/fa6";


const ImageBanner = () => {
  return (
    <div className="breadcrumb-area bg-gradient position-relative box_cont">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="bg-video"
      >
        <source src={BgVideo} type="video/mp4" />
  
      </video>

      {/* Overlay */}
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 cont_center" style={{ zIndex: 1 }}>
            <h2 className='head'><span style={{color: "#ff9219"}}>W</span>ebsite <span style={{color: "#0d6efd"}}>D</span>evelopment <span style={{color: "#ff9219"}}>C</span>ompany</h2>
            <p className='paragraph_one'>Driving digital transformation through modern web development.
              We craft fast, responsive, and user-friendly websites for every need.
              Choose codegptech — your trusted web development partner.</p>
            <p className='para'>
              High-Quality IT Services&nbsp;
              <TypeAnimation
                sequence={[
                  'Web Development',
                  1000,
                  'Frontend Development',
                  1000,
                  'WordPress Development',
                  1000,
                  'Backend Development',
                  1000,
                  'Digital Marketing',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  display: 'inline-block',
                  color: '#ff9219',
                  fontWeight: '600',
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  marginTop: '5px',
                }}
                repeat={Infinity}
              />
            </p>
            <Link to="/contact">
              <button className="btn mt-3 fw-bold border-0 text-white btn_text">
              Contact Now <FaArrowRight />
            </button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
