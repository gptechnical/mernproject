import { useAuth } from '../store/auth';

const Service = () => {
  const { services } = useAuth();
  console.log("<<<<<<<", services)

  return (
    <>
  <section className="section-services">
    <div className="container">
      <h1 className="main-heading text-center mb-5 fw-bold">Our Services</h1>
    </div>

    <div className="container">
      <div className="row">
        {services.map((curElem, index) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-img-top text-center mt-3">
                <img src="/service.jpg" alt="service" width="200" />
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2 text-muted">
                  <span>{curElem.provider}</span>
                  <span>{curElem.price}</span>
                </div>
                <h5 className="card-title">{curElem.service}</h5>
                <p className="card-text">{curElem.description}</p>
              </div>
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
