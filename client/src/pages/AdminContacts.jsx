import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { AuthorizationToken, API } = useAuth();

  // Fetch contacts
  const getContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setContactData(data);
      } else {
        toast.error("Failed to load contacts");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching contacts");
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        getContactsData();
        toast.success("Deleted successfully");
      } else {
        toast.error("Not Deleted");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error deleting contact");
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <div className="container mt-2 mb-5">
      <h2 className="text-center mb-4 fw-bold">Admin Contacts</h2>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle text-center">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contactData.length > 0 ? (
              contactData.map((curContact, index) => {
                const { username, email, message, _id } = curContact;
                return (
                  <tr key={_id}>
                    <td>{index + 1}</td>
                    <td className="fw-semibold">{username}</td>
                    <td>{email}</td>
                    <td className="text-break">{message}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteContact(_id)}
                      >
                        <i className="bi bi-trash3-fill me-1"></i> Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="text-muted py-4">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContacts;
