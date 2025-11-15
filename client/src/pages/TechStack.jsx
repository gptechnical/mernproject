import "../assets/css/Button.css";
import { FaArrowRight } from "react-icons/fa6";
import Tech1 from "../assets/images/technology/tech1.png";
import Tech2 from "../assets/images/technology/tech2.png";
import Tech3 from "../assets/images/technology/tech3.png";
import Tech4 from "../assets/images/technology/tech4.png";
import Tech5 from "../assets/images/technology/tech5.png";
import Tech6 from "../assets/images/technology/tech6.png";
import Tech7 from "../assets/images/technology/tech7.png";
import Tech8 from "../assets/images/technology/tech8.png";
import Tech9 from "../assets/images/technology/tech9.png";
import Tech10 from "../assets/images/technology/tech10.png";
import Tech11 from "../assets/images/technology/tech11.png";
import Tech12 from "../assets/images/technology/tech12.png";


const TECHS = [
  { id: 1, name: 'Angular JS', logo: Tech1 },
  { id: 2, name: 'React JS', logo: Tech2 },
  { id: 3, name: 'HTML5', logo: Tech3 },
  { id: 4, name: 'CSS3', logo: Tech4 },
  { id: 5, name: 'JavaScript', logo: Tech5 },
  { id: 6, name: 'Bootstrap', logo: Tech6 },
  { id: 7, name: 'jQuery', logo: Tech7 },
  { id: 8, name: 'Wordpress', logo: Tech8 },
  { id: 9, name: 'PHP', logo: Tech9 },
  { id: 10, name: 'My SQL', logo: Tech10 },
  { id: 11, name: 'Node JS', logo: Tech11 },
  { id: 12, name: 'MongoDB', logo: Tech12 }
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