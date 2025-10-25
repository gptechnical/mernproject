import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 10;

  const { AuthorizationToken, API } = useAuth();

  // Fetch contacts — return the fetched array so callers can react immediately
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
        return data;
      } else {
        toast.error("Failed to load contacts");
        return [];
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching contacts");
      return [];
    }
  };

  // Delete contact — refetch and ensure page index remains valid
  const deleteContact = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        const newData = await getContactsData();
        // ensure currentPage is not greater than the new total pages
        const totalPages = Math.max(1, Math.ceil(newData.length / contactsPerPage));
        setCurrentPage((prev) => Math.min(prev, totalPages));
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
    // initial load
    getContactsData();
  }, []);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(contactData.length / contactsPerPage));
  const indexOfFirst = (currentPage - 1) * contactsPerPage;
  const currentContacts = contactData.slice(indexOfFirst, indexOfFirst + contactsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="container py-3">
      <h2 className="text-center mb-4 fw-bold">Admin Contacts</h2>

      <div className="table-responsive shadow-sm rounded-3 bg-white">
        <table className="table table-striped align-middle mb-0">
          <thead className="table-primary">
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.length > 0 ? (
              currentContacts.map((curContact, idx) => {
                const { username, email, message, _id } = curContact;
                return (
                  <tr key={_id}>
                    <td>{indexOfFirst + idx + 1}</td>
                    <td>{username}</td>
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

      {/* Pagination Controls */}
      {contactData.length > contactsPerPage && (
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default AdminContacts;
