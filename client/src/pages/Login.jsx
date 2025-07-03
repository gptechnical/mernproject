import { useState } from 'react';
import { Section, Form, Label, Input, Button, Span, SpanIcon, Img, Div} from '../styles/Login.styled';
import { MdEmail } from "react-icons/md";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';


const Login = () => {
  const [showPassowrd, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const { storeTokenInLS, API } = useAuth();

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
      const response = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login data : ", response);

      const res_data = await response.json();
      if (response.ok) {
        // alert("Login successful");
        // localStorage.setItem("token", res_data.token);
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("login successful");
        // console.log(res_data);
        navigate("/")
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
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
                    {/* <Div>
                    <span className='remem'>
                      <Input type="checkbox" id="Remember" name="Remember" value="Remember me"/> Remember me</span>
                    <span><a href="#" className='forgot'>Forgot password</a></span>
                   </Div> */}
                   <Button onClick={handleSubmit}>
                    Login
                  </Button>
                </Form>
                {/* <div style={{color: "#ffffff"}}>username: {upadte.email}</div>
                <div style={{color: "#ffffff"}}>password: {upadte.password}</div> */}
              
      </Section>
    </>
  )
}

export default Login
