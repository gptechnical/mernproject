import Slider from "react-slick";
// make sure these imports are already present in your app (you had them in Service)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Testimonials.css"

// Example usage: import Testimonials from './Testimonials'; then <Testimonials />

const Testimonials = ({ testimonials = null }) => {
  const data = testimonials || [
    {
      id: 1,
      name: "Asha Patel",
      title: "Founder, BrightLeaf",
      quote:
        "Design-forward, rock-solid delivery — working with this team accelerated our roadmap by months.",
  
    },
    {
      id: 2,
      name: "Rohit Sharma",
      title: "CTO, NovaTech",
      quote:
        "The componentized approach made it trivial to reuse testimonial cards across our marketing pages.",
   
    },
    {
      id: 3,
      name: "Meera Joshi",
      title: "Product Lead, Loop",
      quote:
        "Beautiful on mobile, delightful on desktop — accessibility and attention to detail stood out.",
     
    },
    {
      id: 4,
      name: "Carlos Mendez",
      title: "Head of Growth, Flux",
      quote:
        "Our conversion uplift after adding social proof was immediate. The UI matched our brand in minutes.",
     
    },
    {
      id: 5,
      name: "Sana Khan",
      title: "Product Manager, NovaApps",
      quote:
        "Great communication, on-time delivery and very helpful throughout the project lifecycle.",
      
    },
  ];

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    ❮
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  pauseOnFocus: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,       // arrows hide on mobile
        arrows: false     // hides buttons for small screens
      },
    },
  ],
};


  // small inline styles to keep everything in the same file (you can move to CSS)
  const cardStyle = {
    maxWidth: "520px",
    margin: "0 auto",
    padding: "30px 20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    background: "#fff",
    minHeight: "220px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const quoteStyle = {
    color: "#374151",
    marginBottom: "12px",
    fontSize: "16px",
  };

  const metaStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "8px",
  };

  return (
    <section
      className="py-5"
      style={{ background: "#f7f7f7" }}
      role="region"
      aria-label="Customer testimonials"
    >
      <div className="container">
        <h2 className="fw-bold display-6 mb-3 text-center">What Our Clients Say</h2>
        <p className="text-muted mb-5 text-center">
          Clients trust us because we deliver quality results on time. Their testimonials <br /> 
          reflect our commitment to making every project a success.
        </p>

        <Slider {...settings} aria-live="polite">
          {data.map((t) => (
            <div key={t.id} className="px-3" aria-hidden={false}>
              <div style={cardStyle}>
                <p style={quoteStyle}>&ldquo;{t.quote}&rdquo;</p>

                <div style={metaStyle}>
               
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#001d4c",
                        fontSize: "18px",
                      }}
                    >
                      {t.name}
                    </div>
                    <div style={{ fontSize: "16px", color: "#6b7280" }}>
                      {t.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
