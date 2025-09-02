import AboutImg from '../assets/images/aboutus.jpg';
import "../assets/css/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="row align-items-center justify-content-center">
          {/* Column 1: Text */}
          <div className="col-md-6">
            <h2 style={{ fontWeight: "700", color: "#000a2d" }}>Welcome to</h2>
            <h3 style={{fontWeight: "700", color: "red", fontSize: "40px"}}>codegptech</h3>
            <p style={{ fontSize: "18px", fontWeight: "500", color: "#000000cf" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aliquid placeat error quae, doloremque soluta blanditiis velit, 
              incidunt obcaecati tenetur natus dolorum magnam beatae. Iusto, 
              omnis tempore nobis voluptatum expedita pariatur.
            </p>
            <p style={{ fontSize: "18px", fontWeight: "500", color: "#000000cf" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aliquid placeat error quae, doloremque soluta blanditiis velit, 
              incidunt obcaecati tenetur natus dolorum magnam beatae. Iusto, 
              omnis tempore nobis voluptatum expedita pariatur.
            </p>
          </div>

          {/* Column 2: Image */}
          <div className="col-md-6 text-center">
            <img 
              src={AboutImg} 
              alt="About Us" 
              className="img-fluid rounded img_about" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
