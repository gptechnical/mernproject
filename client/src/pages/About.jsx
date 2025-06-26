import React from 'react'
import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();
  return (
    <>
    <div style={{paddingTop: "80px"}}>
      <h2>welcome to about Page  </h2>
      <p>Welcome , { user ? `${user.username} to our website` : 'to our website'}</p>
    </div>
    </>
  )
}

export default About
