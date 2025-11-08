import { useState } from 'react';
import { Section, Form, Label, Input, Button, Span, SpanIcon, Img, Div, InputWrapper } from '../styles/Login.styled';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const API = import.meta.env.VITE_APP_URI_API;
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    let valid = true;

    if (!user.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      newErrors.email = "Invalid email address.";
      valid = false;
    }

    if (!user.password.trim()) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please correct the errors before continuing.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API}/api/auth/login`, user);
      if (response.status === 200) {
        storeTokenInLS(response?.data.token);
        toast.success("Login successful!");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(response?.data.message || "Invalid credentials");
      }
    } catch (error) {
      toast.error("Login failed! Check your credentials.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEye = () => setShowPassword(!showPassword);

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Img src="./profile.png" alt="profile" />

        <Label htmlFor="email">Email</Label>
        <InputWrapper>
          <Span><MdEmail /></Span>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleInput}
          />
        </InputWrapper>
        {errors.email && <Div>{errors.email}</Div>}

        <Label htmlFor="password">Password</Label>
        <InputWrapper>
          <Span><RiLockPasswordFill /></Span>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleInput}
          />
          <SpanIcon onClick={handleEye}>
            {showPassword ? <BsEyeFill /> : <BsEyeSlash />}
          </SpanIcon>
        </InputWrapper>
        {errors.password && <Div>{errors.password}</Div>}

        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </Form>
    </Section>
  );
};

export default Login;
