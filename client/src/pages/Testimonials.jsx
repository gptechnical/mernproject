import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css/Testimonials.css";

const TestimonialsCarousel = () => {
  const data = [
    {
    id: 1,
    name: "Amit Verma",
    role: "Startup Founder",
    service: "Web Development",
    quote:
      "Codegptech delivered our website on schedule. Clean, well-structured and maintainable code. Excellent performance across all devices. A reliable partner for long-term growth."
  },
  {
    id: 2,
    name: "Neha Singh",
    role: "Marketing Manager",
    service: "Digital Marketing",
    quote:
      "Codegptech built a clear and effective strategy. Improved visibility and qualified leads. Transparent reporting at every stage. Results that directly supported our goals."
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Product Owner",
    service: "Frontend Development",
    quote:
      "Codegptech created a polished user interface. Smooth interactions and responsive layouts. Strong focus on accessibility standards. An exceptional user experience overall"
  },
  {
    id: 4,
    name: "Deepak Sharma",
    role: "Tech Lead",
    service: "Backend Development",
    quote:
      "Codegptech engineered a secure backend system. Scalable APIs with clear documentation. Seamless integration with our frontend. Built for stability and future expansion"
  },
  {
    id: 5,
    name: "Vikram Patel",
    role: "Small Business Owner",
    service: "WordPress Development",
    quote:
      "Codegptech delivered a custom WordPress website. Easy content management and SEO-ready. Optimized for speed and reliability. Professional support from start to launch"
  }
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 767, min: 0 }, items: 1 }
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">   {/* ✅ Correct container tag */}
       <h2 class="fw-bold display-6 mb-3 text-center">What Our Clients Say</h2>
       <p class="text-muted mb-5 text-center">Clients trust us because we deliver quality results on time. Their testimonials <br />
      reflect our commitment to making every project a success.</p>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3500}
          arrows={true}
          showDots={true}
          removeArrowOnDeviceType={["mobile"]}
        >
          {data.map((item) => (
            <div key={item.id} className="p-3">
              <div className="card shadow-sm border-0 p-4" style={{ borderRadius: "12px" }}>
                <p>“{item.quote}”</p>
                <h5 className="fw-bold mt-3 mb-0">{item.name}</h5>
                <p className="text-muted">{item.role}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
