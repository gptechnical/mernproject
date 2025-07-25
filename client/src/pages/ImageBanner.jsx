import { TypeAnimation } from 'react-type-animation';
import AboutTopImg from '../assets/images/ban.jpg';
import { Link } from 'react-router-dom';
import "../assets/css/VideoCarousel.css";

const ImageBanner = () => {
  return (
    <>
      <div
        className="breadcrumb-area bg-gradient position-relative box_cont"
      >
        <div
          style={{
            backgroundImage: `url(${AboutTopImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -99,
          }}
        ></div>

        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: -1,
          }}
        ></div>

        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-6 cont_center">
              <h2 className='head'>Welcome to codegptech</h2>
              <p className='para'>
                High-Quality IT Services&nbsp;
                <TypeAnimation
                  sequence={[
                    'Web Development',
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
                  style={{
                    display: 'inline-block',
                    color: '#ffc700',
                    fontWeight: '700',
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    marginTop: '5px',
                  }}
                  repeat={Infinity}
                />
              </p>
              <Link to="/contact">
          <button className="btn btn-warning mt-3 fw-bold">Contact Now</button>
          </Link>
            </div>
            <div className="col-md-6 text-center">
              <img src="./Developer.png" alt="Developer" className='img_res'/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageBanner;
