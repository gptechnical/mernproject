import { useAuth } from '../store/auth';
import "../assets/css/ServiceCard.css";
import { Link } from 'react-router-dom';

const ServiceCard = () => {
  const { services } = useAuth();
  console.log("<<<<<<<", services);

  return (
    <section className="section-services py-5">
      <div className="container">
        {/* <h1 className="main-heading text-center mb-5 fw-bold text-gradient">Our Services</h1> */}
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
                    <button className="btn-read">Read More</button>
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
