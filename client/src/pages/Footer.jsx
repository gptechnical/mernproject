import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="text-light py-4 mt-5" style={{backgroundColor: "#000000f0"}}>
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 mb-3">
            <h5 style={{fontWeight: "700", fontSize: "25px"}}>About Us</h5>
            <ul className="list-unstyled">
              <li>
                <p style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet consectetur elit. 
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
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blogs</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-3">
            <h5 style={{fontWeight: "700", fontSize: "25px"}}>Services</h5>
            <ul className="list-unstyled line" style={{lineHeight: "2"}}>
              <li><a href="#" className="text-light text-decoration-none">Software Development</a></li>
              <li><a href="#" className="text-light text-decoration-none">Web Designing</a></li>
              <li><a href="#" className="text-light text-decoration-none">Frontend Development</a></li>
              <li><a href="#" className="text-light text-decoration-none">Backend Development</a></li>
              <li><a href="#" className="text-light text-decoration-none">Digital Marketing</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="col-md-3 mb-3">
            <h5 style={{fontWeight: "700", fontSize: "25px"}}>Contact Info</h5>
            <ul className="list-unstyled" style={{lineHeight: "2"}}>
              <li><a href="tel:+917536087177" className="text-light text-decoration-none"><FaPhone /> +91-7536087177</a></li>
              <li><a href="#" className="text-light text-decoration-none"><CgMail /> gptech015@gmail.com</a></li>
              {/* <li><a href="#" className="text-light"><IoLocationSharp /> </a></li> */}
            </ul>
          </div>
        </div>

        <hr className="bg-light" />
        <p className="text-center mb-0">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
