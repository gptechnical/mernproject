import "../assets/css/Button.css";
import { FaArrowRight } from "react-icons/fa6";

const TECHS = [
  { id: 1, name: 'Angular JS', logo: '/src/assets/images/technology/tech1.png' },
  { id: 2, name: 'React JS', logo: '/src/assets/images/technology/tech2.png' },
  { id: 3, name: 'HTML5', logo: '/src/assets/images/technology/tech3.png' },
  { id: 4, name: 'CSS3', logo: '/src/assets/images/technology/tech4.png' },
  { id: 5, name: 'JavaScript', logo: '/src/assets/images/technology/tech5.png' },
  { id: 6, name: 'Bootstrap', logo: '/src/assets/images/technology/tech6.png' },
  { id: 7, name: 'jQuery', logo: '/src/assets/images/technology/tech7.png' },
  { id: 8, name: 'Wordpress', logo: '/src/assets/images/technology/tech8.png' },
  { id: 9, name: 'PHP', logo: '/src/assets/images/technology/tech9.png' },
  { id: 10, name: 'My SQL', logo: '/src/assets/images/technology/tech10.png' },
  { id: 11, name: 'Node JS', logo: '/src/assets/images/technology/tech11.png' },
  { id: 12, name: 'MongoDB', logo: '/src/assets/images/technology/tech12.png' }
];

function TechStack() {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold display-6 mb-3">Latest Technologies We Work With</h2>
        <p className="text-muted mb-5">
           Codegptech stays ahead of the tech curve by adopting the latest web technologies. 
             We use modern tools <br /> and deep expertise to deliver smart, efficient, and high-quality solutions.
        </p>

        <div className="card border-0 shadow-sm rounded-4">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-0">
            {TECHS.map((tech) => (
              <div key={tech.id} className="col border p-4 d-flex flex-column align-items-center justify-content-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="img-fluid mb-2"
                  style={{ maxHeight: '60px', objectFit: 'contain' }}
                />
                <p className="fw-semibold mb-0">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <a href="/contact" className="btn mt-3 fw-bold border-0 text-white btn_text">
            Talk to our experts <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default TechStack;