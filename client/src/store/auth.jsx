import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const AuthorizationToken = `Bearer ${token}`;

  const API = import.meta.env.VITE_APP_URI_API;

  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  // this is the get the value in either true or false in the original state of token

  let isLoggedIn = !!token;
  // console.log("token", token);
  console.log("isLoggedIN", isLoggedIn);

  //tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  }

  // JWT Authantication - to get the currently loggedIN  user data

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.error("Error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  }

//to fetch the services data from the database

const getServices = async () =>{
  try {
    const response = await axios.get(`${API}/api/data/service`,{
      method: "GET",
    });
    if(response.ok) {
      const data = await response.json();
      setServices(data.msg);
    }
  } catch (error) {
    console.log(`service frontend error: ${error}`);
  }
};
  useEffect(() => {
    getServices();
    userAuthentication();
  },[]);

  return (
    <AuthContext.Provider 
    value={{ 
      isLoggedIn, 
      storeTokenInLS, 
      LogoutUser, 
      user, 
      services, 
      AuthorizationToken, 
      isLoading,
      API, 
      }}>
      {children}
    </AuthContext.Provider>
  );
};  

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};