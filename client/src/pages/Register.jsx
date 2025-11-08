import React, { useState } from "react";
import { Section, Form, Heading, Button, Label, Input } from "../styles/Register.styled";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

// Regex helpers
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts optional +country code and 10–15 digits (no spaces or letters)
const PHONE_RE = /^\+?\d{10,15}$/;

const errorStyle = {
  color: "#d9534f",
  fontSize: "0.9rem",
  marginTop: 6,
};
const pwStyle = {
  fontSize: "0.9rem",
  color: "#666",
  marginBottom: 6,
};

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();

  // ---------- VALIDATION ----------
  const validate = (values) => {
    const errs = {};

    // username
    if (!values.username || values.username.trim() === "") {
      errs.username = "Username is required";
    } else if (values.username.trim().length < 2) {
      errs.username = "Username must be at least 2 characters";
    } else if (values.username.trim().length > 50) {
      errs.username = "Username must be 50 characters or less";
    }

    // email
    if (!values.email || values.email.trim() === "") {
      errs.email = "Email is required";
    } else if (!EMAIL_RE.test(values.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    // phone (optional but validated when present)
    if (values.phone && values.phone.trim() !== "") {
      const normalized = values.phone.trim();
      if (!PHONE_RE.test(normalized)) {
        errs.phone = "Please enter a valid phone number (10–15 digits, digits only)";
      }
    }

    // password
    if (!values.password || values.password === "") {
      errs.password = "Password is required";
    } else if (values.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    } else if (values.password.length > 128) {
      errs.password = "Password is too long";
    }

    return errs;
  };

  // password strength helper
  const passwordStrength = (pw) => {
    if (!pw) return "";
    if (pw.length >= 12) return "Strong";
    if (pw.length >= 8) return "Good";
    return "Weak";
  };

  // handleInput now validates using the *next* value to avoid stale-state issues
  const handleInput = (e) => {
    const { name, value } = e.target;
    const nextUser = { ...user, [name]: value };
    setUser(nextUser);

    // optimistic single-field validation using nextUser
    setErrors((prev) => {
      const next = { ...prev };
      const fieldErrors = validate(nextUser);
      if (fieldErrors[name]) next[name] = fieldErrors[name];
      else delete next[name];
      return next;
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(user));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ username: true, email: true, phone: true, password: true });

    const validationErrors = validate(user);
    setErrors(validationErrors);

    // keep validation on submit (prevents sending invalid data)
    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        setTouched({});
        setErrors({});
        toast.success("Registration successful");
        navigate("/");
      } else {
        const msg = res_data.extraDetails || res_data.message || "Registration failed";
        toast.error(msg);
      }
    } catch (err) {
      console.error("Register error:", err);
      toast.error(err?.message || "An error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Section>
        <Form onSubmit={handleSubmit} noValidate>
          <Heading>Registration Form</Heading>

          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            value={user.username}
            onChange={handleInput}
            onBlur={handleBlur}
            placeholder="Username"
            aria-invalid={!!(touched.username && errors.username)}
            className={`input_box ${touched.username && errors.username ? "is-invalid" : ""}`}
          />
          {touched.username && errors.username && <div style={errorStyle}>{errors.username}</div>}

          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleInput}
            onBlur={handleBlur}
            placeholder="Email"
            aria-invalid={!!(touched.email && errors.email)}
            className={`input_box ${touched.email && errors.email ? "is-invalid" : ""}`}
          />
          {touched.email && errors.email && <div style={errorStyle}>{errors.email}</div>}

          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={user.phone}
            onChange={handleInput}
            onBlur={handleBlur}
            placeholder="Phone"
            aria-invalid={!!(touched.phone && errors.phone)}
            className={`input_box ${touched.phone && errors.phone ? "is-invalid" : ""}`}
          />
          {touched.phone && errors.phone && <div style={errorStyle}>{errors.phone}</div>}

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleInput}
            onBlur={handleBlur}
            placeholder="Password"
            aria-invalid={!!(touched.password && errors.password)}
            className={`input_box ${touched.password && errors.password ? "is-invalid" : ""}`}
          />
          {user.password && <div style={pwStyle}>Strength: {passwordStrength(user.password)}</div>}
          {touched.password && errors.password && <div style={errorStyle}>{errors.password}</div>}

          {/* Button is always enabled; we still show submitting state */}
          <Button type="submit" className="btn btn-submit">
            {submitting ? "Registering..." : "Register Now"}
          </Button>
        </Form>
      </Section>
    </>
  );
};

export default Register;
