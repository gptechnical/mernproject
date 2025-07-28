import { useAuth } from '../store/auth';
import "../assets/css/ServiceCard.css";

const Service = () => {
  const { services } = useAuth();
  console.log("<<<<<<<", services)

  return (
    <>
  <section className="section-services">
    <div className="container mt-3">
      <h1 className="main-heading text-center mb-5 fw-bold">Our Services</h1>
    </div>

    <div className="container">
      <div className="row">
        {services.map((curElem, index) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm card_bg">
              <div className="card-img-top text-center mt-3">
                {/* <img src="/service.jpg" alt="service" width="200" /> */}
                <img src={curElem.image} className="icon_col" alt="" />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2 text-muted">
                  <span>{curElem.provider}</span>
                </div>
                <h5 className="card-title text-white fw-bolder fs-4 text-center">{curElem.service}</h5>
                <p className="card-text text-white fs-6 fw-medium text-center">{curElem.description}</p>
              </div>
              <div className='text-center'><button className='btn_read'>Read More...</button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

    </>
  );
};

export default Service
