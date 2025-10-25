import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const { AuthorizationToken, API } = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <div className="container py-2">
      <h2 className="text-center mb-4 fw-bold">Admin Users</h2>

      <div className="table-responsive shadow-sm rounded-3 bg-white">
        <table className="table table-striped align-middle mb-0">
          <thead className="table-primary text-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index} className="text-center">
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link
                      to={`/admin/users/${user._id}/edit`}
                      className="btn btn-sm btn-primary"
                    >
                      <i className="bi bi-pencil-square me-1"></i>Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="btn btn-sm btn-danger"
                    >
                      <i className="bi bi-trash me-1"></i>Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted py-4">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
