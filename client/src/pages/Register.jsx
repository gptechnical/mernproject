import { useState } from "react";
import { Section, Form, Heading, Button, Label, Input } from "../styles/Register.styled";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  const navigate = useNavigate();

  const { storeTokenInLS, API } = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

    // handle form on submit
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user);
  
      try {
        const response = await fetch(`${API}/api/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        // console.log("registration data : ", response);
        const res_data = await response.json();
        console.log("res from server", res_data.extraDetails);
  
        if (response.ok) {
          //stored the token in localhost
          storeTokenInLS(res_data.token);
          // localStorage.setItem("token", res_data);
          // const responseData = await response.json();
          setUser({ username: "", email: "", phone: "", password: "" });
          toast.success("registration successful");
          // console.log(res_data);
          navigate("/");
        } else {
          // console.log("error inside response ", "error");
          toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };

  return (
    <>
      <Section>
          <Form onSubmit={handleSubmit}>
          <Heading>Registration Form</Heading> 
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInput}
                placeholder="Username"
                className="input_box"
              />
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Email" 
                className="input_box"
              />
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="number"
                name="phone"
                value={user.phone}
                onChange={handleInput}
                placeholder="Number"
                className="input_box"
              />
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Password"
                className="input_box"
              />
            <Button type="submit" className="btn btn-submit">
              Register Now
            </Button>
          </Form>
      </Section>
    </>
  );
};