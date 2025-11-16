import AboutImg from '../assets/images/About.png';
import "../assets/css/AboutUs.css";
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row align-items-center justify-content-center">
          {/* Column 1: Text */}
          <div className="col-md-6">
          <h2 className="fw-bold display-6 mb-3">Innovation That Powers Codegptech Technologies</h2>
            
            <p style={{ fontSize: "16px", color: "#000000cf", textAlign: "justify" }}>
             Codegptech is a creative and trusted IT solutions company focused on delivering powerful digital experiences.
            We specialize in web development, backend development, UI/UX design, and digital marketing — helping businesses grow with smart and modern technology.
            </p>
            <p style={{ fontSize: "16px", color: "#000000cf", textAlign: "justify" }}>
             Our team believes in innovation, quality, and customer satisfaction.
             We work closely with every client to understand their goals and turn ideas into real results.

              At codegptech, we aim to make technology simple, effective, and accessible for everyone.
              With passion and dedication, we build solutions that empower businesses to shine in the digital world.
            </p>
            {/* <ul style={{paddingLeft: "0px", listStyle: "none", fontWeight: "500"}}>
              <li><FaAngleRight /> Solving Complex Problems</li>
              <li><FaAngleRight /> Trusted and Reliable Service</li>
              <li><FaAngleRight /> Future-Ready Technology</li>
              
            </ul> */}
              <div className="mt-4">
              <a href="/contact" className="btn mt-3 fw-bold border-0 text-white btn_text">
                Talk to our experts <FaArrowRight />
              </a>
            </div>
          </div>

          {/* Column 2: Image */}
          <div className="col-md-6 text-center">
            <img 
              src={AboutImg} 
              alt="About Us" 
              className="img-fluid rounded" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
