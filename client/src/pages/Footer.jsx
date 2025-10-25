import { FiPhoneCall } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import FooterImg from "../assets/images/footer.jpg";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="text-light py-4 position-relative"
      style={{
        backgroundImage: `url(${FooterImg})`, // your footer background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 10, 45, 0.8)", // dark overlay
          zIndex: -1,
        }}
      ></div>

      <div className="container position-relative">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 mb-3">
            <img src="/logocoder.png" alt="" width="150px" />
            <h4 className="mt-3">Follow Us :</h4>
            <ul style={{ listStyle: "none", paddingLeft: "0"}} className="d-flex gap-4">
              <li><a href="https://www.facebook.com/share/1EXVyqzA6p/?mibextid=wwXIfr" style={{ color: "#ffffff", fontSize: "1.5rem"}}><BsFacebook /></a></li>
              <li><a href="https://www.instagram.com/codegptech/" style={{ color: "#ffffff", fontSize: "1.5rem"}}><BsInstagram /></a></li>
              <li><a href="#" style={{ color: "#ffffff", fontSize: "1.5rem"}}><BsTwitterX /></a></li>
              <li><a href="#" style={{ color: "#ffffff", fontSize: "1.5rem"}}><FaLinkedin /></a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-3">
            <h5 style={{ fontWeight: "700", fontSize: "25px" }}>Quick Links</h5>
            <ul className="list-unstyled" style={{ lineHeight: "2" }}>
              <li>
                <a href="#" className="text-light text-decoration-none fw-semibold">
                  <RiArrowRightDoubleFill style={{ fontSize: "22px" }} /> Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none fw-semibold">
                  <RiArrowRightDoubleFill style={{ fontSize: "22px" }} /> About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none fw-semibold">
                  <RiArrowRightDoubleFill style={{ fontSize: "22px" }} /> Services
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none fw-semibold">
                  <RiArrowRightDoubleFill style={{ fontSize: "22px" }} /> Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none fw-semibold">
                  <RiArrowRightDoubleFill style={{ fontSize: "22px" }} /> Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-3">
            <h5 style={{ fontWeight: "700", fontSize: "25px" }}>Services</h5>
            <ul className="list-unstyled" style={{ lineHeight: "2" }}>
              <li>
                <a href="#" className="text-light text-decoration-none fw-semibold">
                  <RiArrowRightDoubleFill style={{ fontSize: "22px" }} /> Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none fw-semibold">
                  <RiArrowRightDoubleFill style={{ fontSize: "22px" }} /> Web Designing
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none fw-semibold">
                  <RiArrowRightDoubleFill style={{ fontSize: "22px" }} /> Frontend Development
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none fw-semibold">
                  <RiArrowRightDoubleFill style={{ fontSize: "22px" }} /> Backend Development
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none fw-semibold">
                  <RiArrowRightDoubleFill style={{ fontSize: "22px" }} /> Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-3">
            <h5 style={{ fontWeight: "700", fontSize: "25px" }}>Contact Info</h5>
            <ul className="list-unstyled" style={{ lineHeight: "2" }}>
              <li>
                <a href="tel:+917906923266" className="text-light text-decoration-none fw-semibold">
                  <FiPhoneCall style={{ fontSize: "20px" }} /> +91-7906923266
                </a>
              </li>
              <li>
                <a href="mailto:info@codegptech.shop" className="text-light text-decoration-none fw-semibold">
                  <CgMail style={{ fontSize: "20px" }} /> info@codegptech.shop

                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="bg-light" />
        <p className="text-center mb-0 fw-semibold">
          © {new Date().getFullYear()} www.codegptech.shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
