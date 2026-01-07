import { useState } from "react";
import Pic1 from "../assets/images/pic1.png";
import Pic2 from "../assets/images/pic2.png";
import Pic3 from "../assets/images/pic3.png";
import Pic4 from "../assets/images/pic4.png";
import { FaArrowRight } from "react-icons/fa6";
 
export default function Portfolio({ projects }) {
  const sample = [
    {
      id: 1,
      title: "Website Development Company",
      tags: ["React"],
      img: Pic1,
      url: "https://codegptech.shop/",
    },
    {
      id: 2,
      title: "E‑commerce Store (Mobile-first)",
      tags: ["E‑commerce"],
      img: Pic4,
      url: "#",
    },
    {
      id: 3,
      title: "Nursing Health Care",
      tags: ["React"],
      img: Pic2,
      url: "https://nursinghealth.netlify.app/",
    },
    {
      id: 4,
      title: "Dashboard (Admin)",
      tags: ["Dashboard"],
      img: Pic3,
      url: "#",
    },
  ];

  const data = projects && projects.length ? projects : sample;
  const allTags = ["All", ...Array.from(new Set(data.flatMap((p) => p.tags)))];

  const [activeTag, setActiveTag] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeTag === "All" ? data : data.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">My Portfolio</h2>
        <p className="text-muted">A selection of my work across web applications, mobile experiences, and scalable design systems.</p>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {allTags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActiveTag(t)}
            className={`btn btn-sm ${t === activeTag ? "btn-primary" : "btn-outline-secondary"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filtered.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div style={{ overflow: "hidden" }}>
                <img
                  src={p.img}
                  className="card-img-top"
                  alt={p.title}
                  style={{ objectFit: "cover", width: "100%" }}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text text-muted small">{p.description}</p>

                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <div className="small text-muted">{p.tags.join(" • ")}</div>
                  <div>
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      type="button"
                      onClick={() => setSelected(p)}
                    >
                      View
                    </button>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-2">
         <a href="/contact" className="btn mt-3 fw-bold border-0 text-white btn_text">
          Talk to our experts <FaArrowRight />
          </a>
      </div>

      {/* Modal (React-controlled, Bootstrap-styled) */}
      {selected && (
        <div className="portfolio-modal">
          {/* Backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={() => setSelected(null)}
            style={{ position: "fixed", inset: 0, zIndex: 1040 }}
          />

          <div
            className="modal d-block"
            tabIndex={-1}
            role="dialog"
            style={{ position: "fixed", inset: 0, zIndex: 1050, overflowY: "auto" }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selected.title}</h5>
                  <button type="button" className="btn-close" onClick={() => setSelected(null)} />
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <img
                        src={selected.img}
                        alt={selected.title}
                        className="img-fluid rounded"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <p className="text-muted small">{selected.tags.join(", ")}</p>
                      <p>{selected.description}</p>

                      <div className="mt-3">
                        <a href={selected.url} target="_blank" rel="noreferrer" className="btn btn-primary me-2">View Project</a>
                        <button className="btn btn-outline-secondary" onClick={() => setSelected(null)}>Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
