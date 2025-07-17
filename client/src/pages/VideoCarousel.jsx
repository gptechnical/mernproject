import "../assets/css/VideoCarousel.css";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const VideoCarousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="video-overlay">
              <video className="w-100" autoPlay muted loop>
                <source src="/lap.mp4" type="video/mp4" />
              </video>
              <div className="custom-caption">
                <h1 className="headh1">Welcome to codegptech</h1>
                <p className="paragraph">
                  High-Quality IT Services{" "}
                  <TypeAnimation
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
                    style={{
                      display: "inline-block",
                      color: "#ffc700",
                      fontWeight: "700",
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      marginTop: "5px",
                    }}
                    repeat={Infinity}
                  />
                </p>
                <Link to="/contact"><button className="btn_text">Contact Now</button></Link>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="video-overlay">
              <video className="w-100" autoPlay muted loop>
                <source src="/lap1.mp4" type="video/mp4" />
              </video>
              <div className="custom-caption">
                <h1 className="headh1">Welcome to codegptech</h1>
                <p className="paragraph">
                  High-Quality IT Services{" "}
                  <TypeAnimation
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
                    style={{
                      display: "inline-block",
                      color: "#ffc700",
                      fontWeight: "700",
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      marginTop: "5px",
                    }}
                    repeat={Infinity}
                  />
                </p>
                <Link to="/contact"><button className="btn_text">Contact Now</button></Link>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span><FaCircleChevronLeft style={{fontSize: "30px"}}/></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span><FaCircleChevronRight style={{fontSize: "30px"}}/></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
