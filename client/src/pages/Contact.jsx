import React, {useState} from 'react';
import { Section, Form, Input, Label, Button, Heading, Textarea } from '../styles/Contact.styled';
import { useAuth } from "../store/auth";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);

  const { user, API } = useAuth();

  if(userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/form/contact`,{
        method: "POST",
        headers: {
          'Content-Type' : "application/json"
        },
        body: JSON.stringify(contact),
      });
    if(response.ok) {
      setContact(defaultContactFormData);
      const data = await response.json();
      console.log(data);
      alert("Message send successfully");
    }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Section>
            <Form onSubmit={handleSubmit}>
                <Heading>Contact Us</Heading>
                <Label htmlFor="username">username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  placeholder='Username'
                  required
                  className='input_box'
                />
                <Label htmlFor="email">email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  placeholder='Email'
                  required
                  className='input_box'
                />
                <Label htmlFor="message">message</Label>
                <Textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  placeholder='Message'
                  required
                  cols="15"
                  rows="3"
                  className='input_box'
                ></Textarea>
                <Button type="submit">submit</Button>
            </Form>
      </Section>  
    </>
  )
}

export default Contact
