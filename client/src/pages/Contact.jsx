import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import "../assets/css/contact.css";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

// Simple email regex (reasonable for client-side validation)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values) => {
  const errors = {};

  // Username: required, min 2 chars, max 50
  if (!values.username || values.username.trim() === "") {
    errors.username = "Name is required";
  } else if (values.username.trim().length < 2) {
    errors.username = "Name must be at least 2 characters";
  } else if (values.username.trim().length > 50) {
    errors.username = "Name must be 50 characters or less";
  }

  // Email: required + format
  if (!values.email || values.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  // Message: required + min length
  if (!values.message || values.message.trim() === "") {
    errors.message = "Message is required";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (values.message.trim().length > 2000) {
    errors.message = "Message is too long";
  }

  return errors;
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const { user, API } = useAuth();

  useEffect(() => {
    if (user) {
      setContact((prev) => ({
        ...prev,
        username: user.username ?? "",
        email: user.email ?? "",
      }));
    }
  }, [user]);

  // Re-validate on change
  useEffect(() => {
    setErrors(validate(contact));
  }, [contact]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const isValid = () => {
    const errs = validate(contact);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ username: true, email: true, message: true });
    setStatus(null);

    const errs = validate(contact);
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      // prevent submission if validation fails
      setStatus({ type: "error", msg: "Please fix the errors in the form." });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      if (!response.ok) throw new Error("Failed to send message");

      await response.json();
      setContact(defaultContactFormData);
      setTouched({});
      setErrors({});
      setStatus({ type: "success", msg: "Message sent successfully!" });
    } catch (err) {
      setStatus({ type: "error", msg: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center align-items-stretch g-4">
        {/* ==== LEFT COLUMN: Address Info ==== */}
        <div className="col-lg-5 col-md-6">
          <div className="card shadow-lg rounded-4 border-0 h-100 bg-light p-4">
            <div className="card-body">
              <h3 className="mb-4 fw-bold text-primary">Get in Touch</h3>
              <p className="text-muted">
                We'd love to hear from you! Reach out through any of the options
                below.
              </p>

              <div className="mt-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-box me-3 text-primary">
                    <i className="bi bi-geo-alt fs-3"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Address</h6>
                    <small className="text-muted">
                      Mamura, Noida Sector-66, India
                    </small>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="icon-box me-3 text-primary">
                    <i className="bi bi-telephone fs-3"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Phone</h6>
                    <small className="text-muted">+91-7906923266</small>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="icon-box me-3 text-primary">
                    <i className="bi bi-envelope fs-3"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Email</h6>
                    <small className="text-muted">info@codegptech.shop</small>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="icon-box me-3 text-primary">
                    <i className="bi bi-clock fs-3"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Working Hours</h6>
                    <small className="text-muted">Mon–Sat: 9:00am – 6:00pm</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==== RIGHT COLUMN: Contact Form ==== */}
        <div className="col-lg-7 col-md-6">
          <div className="card shadow-lg rounded-4 overflow-hidden border-0 h-100">
            <div className="card-header text-white py-4" style={headerStyle}>
              <h4 className="mb-0">Send Us a Message</h4>
              <small className="opacity-75">
                Fill out the form and we'll get back to you soon.
              </small>
            </div>

            <div className="card-body p-4">
              {status && (
                <div
                  className={`alert ${
                    status.type === "success" ? "alert-success" : "alert-danger"
                  }`}
                >
                  {status.msg}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={contact.username}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    className={`form-control ${
                      touched.username && errors.username ? "is-invalid" : ""
                    } ${touched.username && !errors.username ? "is-valid" : ""}`}
                    placeholder="Your Name"
                    aria-describedby="usernameHelp"
                    required
                  />
                  <label htmlFor="username">Your Name</label>
                  {touched.username && errors.username && (
                    <div className="invalid-feedback d-block">{errors.username}</div>
                  )}
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={contact.email}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    className={`form-control ${
                      touched.email && errors.email ? "is-invalid" : ""
                    } ${touched.email && !errors.email ? "is-valid" : ""}`}
                    placeholder="Your Email"
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                  {touched.email && errors.email && (
                    <div className="invalid-feedback d-block">{errors.email}</div>
                  )}
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    name="message"
                    id="message"
                    value={contact.message}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    className={`form-control ${
                      touched.message && errors.message ? "is-invalid" : ""
                    } ${touched.message && !errors.message ? "is-valid" : ""}`}
                    style={{ height: "120px" }}
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  {touched.message && errors.message && (
                    <div className="invalid-feedback d-block">{errors.message}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2"
                  disabled={loading || !isValid()}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const headerStyle = {
  background:
    "linear-gradient(135deg, rgba(58,123,213,1) 0%, rgba(100,63,201,1) 100%)",
};

export default Contact;
