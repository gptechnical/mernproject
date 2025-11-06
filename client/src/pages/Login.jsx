import { useState } from 'react';
import { Section, Form, Label, Input, Button, Span, SpanIcon, Img, Div} from '../styles/Login.styled';
import { MdEmail } from "react-icons/md";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import axios from 'axios'

const Login = () => {
  const API = import.meta.env.VITE_APP_URI_API;
  const [showPassowrd, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const respons = await axios.post(`${API}/api/auth/login`,user)
      if(respons.status == 200){
        storeTokenInLS(respons?.data.token);
        setUser({ email: "", password: "" });
        toast.success("login successful");
        navigate("/")
        
      }else{
        toast.error(respons?.data.extraDetails ? respons?.data.extraDetails : respons?.data.message);
        console.log("invalid credential");
      }
    } catch (error) {
      console.error("Error", error);
    }
 
  };

  const handleEye = () =>{
    setShowPassword(!showPassowrd);
  }

  return (
    <>
       <Section>
                <Form>
                  <Img src="./profile.png" alt="profile"/>
                    <Label htmlFor="email">Email</Label>
                    <Span><MdEmail/></Span>
                    <Input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="Email"
                      className='input_box'
                      />
                    <Label htmlFor="password">Password</Label>
              
                    <SpanIcon onClick={handleEye}>
                       {showPassowrd ? <BsEyeFill /> : <BsEyeSlash />}
                    </SpanIcon>
                    <Input
                      type={showPassowrd ? "text" : "password"}
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="Password"
                      className='input_box'
                    />
                 
                   <Button onClick={handleSubmit}>
                    Login
                  </Button>
                </Form>
      </Section>
    </>
  )
}

export default Login
