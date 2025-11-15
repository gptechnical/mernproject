import { useAuth } from '../store/auth';
import "../assets/css/ServiceCard.css";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = () => {
  const { services } = useAuth();
  console.log("<<<<<<<", services);

  return (
    <section className="section-services py-5">
      <div className="container">
        <h2 className="fw-bold display-6 mb-3 text-center">We focus on delivering quality services</h2>
        <p className="text-muted mb-5 text-center">
          Codegptech offers complete website design and development services, digital marketing, SEO, and e-commerce <br /> solutions building secure, responsive platforms that help businesses grow and succeed online.
        </p>
        <div className="row g-4">
          {services.map((curElem, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div className="service-card">
                <div className="service-image">
                  <img src={curElem.image} alt={curElem.service} />
                  <div className="image-overlay"></div>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{curElem.service}</h3>
                  <p className="service-description">{curElem.description}</p>
                  <Link to="/contact">
                    <button className="btn-read">Explore More <FaArrowRight /></button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
