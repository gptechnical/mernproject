import { Link } from 'react-router-dom';
import AboutTopImg from '../assets/images/about.jpg';
import { IoHome } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { CgFormatSlash } from "react-icons/cg";


const AboutBreadcrumb = () => {
  return (
    <div className="breadcrumb-area bg-gradient text-center position-relative" 
      style={{ overflow: 'hidden', height: "50vh"}}>
      <div
        // className="fixed-bg"
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
          zIndex: 1,
        }}
      ></div>

      {/* Overlay */}
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 2,
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 3, marginTop: "100px" }}>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="text-white fw-bolder">About Us</h1>
            <ul className="breadcrumb d-flex justify-content-center gap-2 text-white">
              <li>
                <Link to="/" className="text-white text-decoration-none fw-bolder">
                 <IoHome /> Home
                </Link>
              </li>
              <li className='fw-medium'><FaAngleRight /> Pages</li>
              <li className="active fw-medium"><CgFormatSlash className='fs-4'/> About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBreadcrumb;
