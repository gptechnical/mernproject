import { FaUsers, FaCheckCircle, FaPuzzlePiece, FaHeadset, FaArrowRight } from "react-icons/fa";
import "../assets/css/WhyChooseus.css";
import WhyChooseImg from "../assets/images/whychoose.png";

const features = [
  {
    id: 1,
    icon: <FaUsers size={28} className="text-primary" />,
    title: "Expert Team",
    text: "Experienced professionals delivering excellent results."
  },
  {
    id: 2,
    icon: <FaCheckCircle size={28} className="text-primary" />,
    title: "Quality Control",
    text: "Rigorous testing ensures top-quality output."
  },
  {
    id: 3,
    icon: <FaPuzzlePiece size={28} className="text-primary" />,
    title: "Integration",
    text: "Seamless integration that boosts business efficiency."
  },
  {
    id: 4,
    icon: <FaHeadset size={28} className="text-primary" />,
    title: "24/7 Support",
    text: "Always available to keep your operations smooth."
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose py-5">
      <div className="container">
        <div className="row align-items-center gx-5">

          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="d-flex justify-content-center position-relative">
              <img
                src={WhyChooseImg}
                alt="Why Choose Us"
                className="img-fluid shadow-sm rounded-3"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="mb-3 text-uppercase text-primary fw-bold">
              Why Choose Us
            </div>

            <h2 className="fw-bold display-6 lh-base mb-3">
              We provide modern IT  <br /> solutions for your success
            </h2>

            <p className="text-muted mb-4">
              Codegptech offers secure, scalable, and innovative digital solutions — from design to deployment.
            </p>

            {/* Features Grid */}
            <div className="row g-3">
              {features.map((item) => (
                <div key={item.id} className="col-12 col-md-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="icon-box d-flex align-items-center justify-content-center rounded-3">
                      {item.icon}
                    </div>
                    <div>
                      <h6 className="mb-1 fw-semibold">{item.title}</h6>
                      <p className="mb-0 text-muted small">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
             
            </div>
             <div className="mt-4">
              <a href="/contact" className="btn mt-3 fw-bold border-0 text-white btn_text">
                Talk to our experts <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
