import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css/Testimonials.css";

const TestimonialsCarousel = () => {
  const data = [
    {
      id: 1,
      name: "Asha Patel",
      role: "Founder, BrightLeaf",
      quote:
        "Design-forward, rock-solid delivery — working with this team accelerated our roadmap by months."
    },
    {
      id: 2,
      name: "Rohit Sharma",
      role: "CTO, NovaTech",
      quote:
        "The componentized approach made it trivial to reuse testimonial cards across marketing pages."
    },
    {
      id: 3,
      name: "Meera Joshi",
      role: "Product Lead, Loop",
      quote:
        "Beautiful on mobile, delightful on desktop — accessibility and attention to detail stood out."
    },
    {
      id: 4,
      name: "Carlos Mendez",
      role: "Growth Head, Flux",
      quote:
        "Beautiful on mobile, delightful on desktop — accessibility and attention to detail stood out."
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
                <p className="fst-italic">“{item.quote}”</p>
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
