import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { RiArrowRightDoubleFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className="text-light py-4 mt-5" style={{backgroundColor: "#000a2d"}}>
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 mb-3">
            {/* <h5 style={{fontWeight: "700", fontSize: "25px"}}>About Us</h5> */}
            <img src="/logo.png" alt="" width="240px"/>
            <ul className="list-unstyled">
              <li>
                <p style={{fontSize: "18px"}} className="fw-semibold">
                Lorem ipsum dolor sit amet consectetur elit. 
                Totam ducimus dignissimos, 
                temporibus voluptatem reprehenderit 
                architecto corrupti laboriosam deserunt.</p>
                </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-3">
            <h5 style={{fontWeight: "700", fontSize: "25px"}}>Quick Links</h5>
            <ul className="list-unstyled" style={{lineHeight: "2"}}>
              <li><a href="#" className="text-light text-decoration-none fw-semibold"><RiArrowRightDoubleFill style={{fontSize: "22px"}}/> Home</a></li>
              <li><a href="#" className="text-light text-decoration-none fw-semibold"><RiArrowRightDoubleFill style={{fontSize: "22px"}}/> About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none fw-semibold"><RiArrowRightDoubleFill style={{fontSize: "22px"}}/> Services</a></li>
              <li><a href="#" className="text-light text-decoration-none fw-semibold"><RiArrowRightDoubleFill style={{fontSize: "22px"}}/> Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none fw-semibold"><RiArrowRightDoubleFill style={{fontSize: "22px"}}/> Blogs</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-3">
            <h5 style={{fontWeight: "700", fontSize: "25px"}}>Services</h5>
            <ul className="list-unstyled line" style={{lineHeight: "2"}}>
              <li><a href="#" className="text-light text-decoration-none fw-semibold"><RiArrowRightDoubleFill style={{fontSize: "22px"}}/> Software Development</a></li>
              <li><a href="#" className="text-light text-decoration-none fw-semibold"><RiArrowRightDoubleFill style={{fontSize: "22px"}}/> Web Designing</a></li>
              <li><a href="#" className="text-light text-decoration-none fw-semibold"><RiArrowRightDoubleFill style={{fontSize: "22px"}}/> Frontend Development</a></li>
              <li><a href="#" className="text-light text-decoration-none fw-semibold"><RiArrowRightDoubleFill style={{fontSize: "22px"}}/> Backend Development</a></li>
              <li><a href="#" className="text-light text-decoration-none fw-semibold"><RiArrowRightDoubleFill style={{fontSize: "22px"}}/> Digital Marketing</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="col-md-3 mb-3">
            <h5 style={{fontWeight: "700", fontSize: "25px"}}>Contact Info</h5>
            <ul className="list-unstyled" style={{lineHeight: "2"}}>
              <li><a href="tel:+917536087177" className="text-light text-decoration-none fw-semibold"><FaPhone style={{fontSize: "20px"}}/> +91-7536087177</a></li>
              <li><a href="#" className="text-light text-decoration-none fw-semibold"><CgMail style={{fontSize: "30px"}}/> gptech015@gmail.com</a></li>
              {/* <li><a href="#" className="text-light"><IoLocationSharp /> </a></li> */}
            </ul>
          </div>
        </div>

        <hr className="bg-light" />
        <p className="text-center mb-0 fw-semibold">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
