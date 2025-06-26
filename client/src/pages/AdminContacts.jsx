import { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
const {AuthorizationToken} = useAuth(); 
  const getContactsData = async () => {
    try {
       const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
        });
        const data =await response.json();
        console.log("contact data", data);
        if(response.ok){
          setContactData(data);
        }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AuthorizationToken,
        },
        });
        if(response.ok){
          getContactsData();
               toast.success("Deleted successfully");
              } else {
                  toast.error("Not Deleted");
              
        }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>{
     getContactsData();
  }, []);
  return (
    <>
      {contactData.map((curContact, index) => {
        const { username, email, message, _id } = curContact;
        return (
          <div key={index}>
            <p>{username}</p>
            <p>{email}</p>
            <p>{message}</p>
           <button onClick={() => deleteContact(_id)}>Delete</button>
          </div>
        )
      })};
    </>
  )
}

export default AdminContacts
