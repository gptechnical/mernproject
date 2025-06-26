import { useEffect, useState } from 'react'
import { Section, Form, Input, Label, Button, Heading, Textarea } from '../styles/Contact.styled';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const params = useParams();

    const {AuthorizationToken} = useAuth();

    // get single user data

    const getSingleUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
        });
        const data = await response.json();
        console.log(`users single data: ${data}`);
        setData(data);
        // if(response.ok){
        //    getAllUsersData();
        // }
       } catch (error) {
        console.log(error);
         }
    };

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({
            ...data,
            [name]: value,
        });
    };

    useEffect(() => {
        getSingleUserData();
    }, []);

    // To update data dynamically

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
             const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
         "Content-Type": "application/json",
          Authorization: AuthorizationToken,
        },
        body:JSON.stringify(data),
        }
    );
    if(response.ok){
        toast.success("Updated successfully");
    } else {
        toast.error("Not Updated");
    }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
       <Section>
                  <Form onSubmit={handleSubmit}>
                      <Heading>Update Users Data</Heading>
                      <Label htmlFor="username">username</Label>
                      <Input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="off"
                        value={data.username}
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
                        value={data.email}
                        onChange={handleInput}
                        placeholder='Email'
                        required
                        className='input_box'
                      />
                       <Label htmlFor="phone">phone</Label>
                      <Input
                        type="phone"
                        name="phone"
                        id="phone"
                        autoComplete="off"
                        value={data.phone}
                        onChange={handleInput}
                        placeholder='phone'
                        required
                        className='input_box'
                      />
                   
                   
                      <Button type="submit">Update</Button>
                  </Form>
            </Section>  
      
    </>
  )
}

export default AdminUpdate
