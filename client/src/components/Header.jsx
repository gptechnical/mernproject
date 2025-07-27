import { MdEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";

const Header = () => {
  return (
    <>
    <div className='container-fluid'>
     <div class="row mt-2 d-none d-md-flex">
    <div class="col-md-6 col-lg-6">
        <ul className='d-flex mt-1' style={{listStyle: "none"}}>
            <li style={{fontSize: "1.1rem", fontWeight: "600"}}>
                <MdEmail style={{color: "#000a2d"}}/> gptech015@gmail.com</li>&emsp;
            <li><a href="tel:+91-7536087177" 
            style={{fontSize: "1.1rem", fontWeight: "600", textDecoration: "none", color: "#000000"}}>
                <FaSquarePhone style={{color: "#000a2d"}}/> +91-7536087177</a></li>
        </ul>
    </div>
    <div class="col-md-6 col-lg-6">
        <ul className='d-flex gap-3 justify-content-center' style={{listStyle: "none"}}>
            <li className='fw-semibold mt-1'>Open Hours of Company Mon - Fri: 9.00 am - 6.00 pm</li>
            <li><a href="#" style={{color: "#000a2d", fontSize: "1.3rem"}}><BsFacebook /></a></li>
            <li><a href="#" style={{color: "#000a2d", fontSize: "1.3rem"}}><BsInstagram /></a></li>
            <li><a href="#" style={{color: "#000a2d", fontSize: "1.3rem"}}><BsTwitterX /></a></li>
            <li><a href="#" style={{color: "#000a2d", fontSize: "1.3rem"}}><FaLinkedin /></a></li>
        </ul>
    </div>
     </div>
    </div>
    </>
  )
}

export default Header
